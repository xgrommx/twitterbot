var Common, app, io, server;
var fs = require('fs');
var expose = require('express-expose');
var RxHttpServer = require('rx-http-server');
var Enumerable = require('lib/linq');

Common = require('lib/common');
app = Common.express();
//server = Common.http.createServer(app);
server = new RxHttpServer(app);
io = require('socket.io').listen(server, Common.config.get('socket.io'));
var passportSocketIO = require('passport.socketio');

var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var MongoStore = require('connect-mongo')(Common.express);

app.locals.pretty = true;

app.use(Common.express.compress({
    filter: function (req, res) {
        return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
    },
    level: 9
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(Common.express.favicon());
//app.use(Common.express.logger('dev'));
app.use(Common.express.bodyParser());
app.use(Common.express.cookieParser());
//app.use(Common.express.cookieSession({
//    secret: 'twitter'
//}));
app.use(Common.express.session({
    key: 'twitter.sid',
    secret: 'twitter',
    store: new MongoStore({
        mongoose_connection: Common.mongoose.connection
    })
}));
app.use(require('middlewares/loadUser'));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
//app.use(Common.express.basicAuth('twitter', 'twitter'));
app.use(Common.express.static(Common.path.join(__dirname, 'public')));

if (app.get('env') === 'development') {
    app.use(Common.express.errorHandler);
}

io.set('authorization', passportSocketIO.authorize({
    cookieParser: Common.express.cookieParser,
    key: 'twitter.sid',
    secret: 'twitter',
    store: new MongoStore({
        mongoose_connection: Common.mongoose.connection
    }),
    success: function (data, accept) {
        console.log('successful connection to socket.io');
        // The accept-callback still allows us to decide whether to
        // accept the connection or not.
        accept(null, true);
    },
    fail: function (data, message, error, accept) {
        console.log('failed connection to socket.io:', message);
        // We use this callback to log all of our failed connections.
        accept(null, false);
    }
}));

var hashList = {};
var hashArray = [];

var getMatchedHash = function(tweet, hashList) {
    var list = Enumerable.from(tweet.entities.hashtags)
        .select(function(n) { return n.text.toLowerCase() })
        .intersect(Enumerable.from(hashList).select(function(n) {
            return n.value.toLowerCase();
        }).toArray()).toArray();

    return list.length > 0 ? list[0].toLowerCase() : null
};

io.sockets.on('connection', function (socket) {
    var clients = io.sockets.clients();
    socket.on('get:tweet', function(hashtag) {
        hashList[socket.id] = hashtag;
        hashArray = Enumerable.from(hashList).select(function(i) { return ['#', i.value].join(''); }).toArray();
        Common.log.info('Hash array contains hashes %s', hashArray.join(', '));

        var twitterStream = Common.Twit.stream('statuses/filter', {track: hashArray});
        var twitterRxStream = Common.Rx.Node.fromTwitterStream(twitterStream, 'tweet');
        var user = socket.handshake.user;

        twitterRxStream.map(function(tweet) {
            var hashtag = getMatchedHash(tweet, hashList);
            if(hashtag != null) {
                if(typeof tweet.created_at !== 'number') {
                    tweet.created_at = Common.moment(tweet.created_at).unix();
                    tweet.user.created_at = Common.moment(tweet.user.created_at).unix();
                }
                if(user.followers_ids.indexOf(tweet.user.id) >= 0) {
                    tweet.follower = true;
                }

                tweet.hashtag = hashtag;
            } else {
                tweet = null;
            }

            return tweet;
        }).subscribe(function(tweet) {
                if(tweet != null) {
                    var twitterUser = null;
                    var twitterData = null;
                    var hashtag = getMatchedHash(tweet, hashList);

                    io.sockets.emit('send:tweet', {tweet: tweet});

                    Common.User.findOne({id: tweet.user.id}, function(err, user) {
                        if(user) {
                            twitterUser = user;
                        } else {
                            twitterUser = new Common.User({
                                id: tweet.user.id,
                                name: tweet.user.name,
                                screen_name: tweet.user.screen_name,
                                profile_image_url: tweet.user.profile_image_url,
                                created_at: tweet.user.created_at,
                                followers_count: tweet.user.followers_count,
                                lang: tweet.user.lang
                            });

                            twitterUser.save(function(err, user) {
                                if(err) {
                                    Common.log.error(err.message);
                                }
                            });
                        }
                        if(tweet.coordinates != null) {
                            twitterData = new Common.Tweet({
                                id: tweet.id,
                                hashtag: hashtag,
                                text: tweet.text,
                                source: tweet.source,
                                retweted: tweet.retweted,
                                retweet_count: tweet.retweet_count,
                                created_at: tweet.created_at,
                                latitude: tweet.coordinates.coordinates[1],
                                longitude: tweet.coordinates.coordinates[0],
                                user: twitterUser._id
                            });
                        } else {
                            twitterData = new Common.Tweet({
                                id: tweet.id,
                                hashtag: hashtag,
                                text: tweet.text,
                                source: tweet.source,
                                retweted: tweet.retweted,
                                retweet_count: tweet.retweet_count,
                                created_at: tweet.created_at,
                                user: twitterUser._id
                            });
                        }
                        twitterData.save(function (err, tweet) {
                            if (err) {
                                Common.log.error(err.message);
                            }
                        });
                    });

                    Common.Spam.findOne({
                        id: tweet.user.id,
                        hashtag: hashtag,
                        date: {
                            $gte: Common.moment().startOf('day').unix(),
                            $lte: Common.moment().unix()
                        }}, function (err, spam) {
                        if (!spam) {
                            var spamData = new Common.Spam({
                                id: tweet.user.id,
                                tweet_id: tweet.id,
                                hashtag: hashtag,
                                date: Common.moment().unix(),
                                count_of_tweets: 1
                            });
                            spamData.save(function (err, spam) {
                                if (err) {
                                    Common.log.error(err.message);
                                }
                            });
                        } else {
                            Common.Spam.update({id: spam.id}, {$inc: {count_of_tweets: 1}}, function (err, affected) {
                            });
                        }
                    });
                }
            });
    });
//    for(var i in clients) {
//        if(clients.hasOwnProperty(i)) {
//            (function() {
//                socket.on('get:tweet-' + clients[i].handshake.user.id, (function(i) {
//                    return function(hashtag) {
//                        var stream = Common.Twit.stream('statuses/sample', {track: '#' + hashtag});
//                        stream.on('connect', function() {
//                            console.log('On socket %s has been started listen stream with track %s',
//                                clients[i].id, stream.params.track);
//                        });
//                        stream.on('disconnect', function() {
//                            console.log('On socket %s has been finished listen stream with track %s',
//                                clients[i].id, stream.params.track);
//                        });
//                        stream.on('reconnect', function() {
//                            console.log('On socket %s has been again started listen stream with track %s',
//                                clients[i].id, stream.params.track);
//                        });
//                        stream.on('tweet', function(tweet) {
//                            console.log(tweet);
//                            clients[i].emit('test-' + clients[i].handshake.user.id, tweet);
//                        });
//
//                    }
//                })(i));
//            })();
//        }
////        (function(user, socket){
////            return tweetReader(user, socket);
////        })(user, clients[i]);
//    }
});

passport.use(new TwitterStrategy({
    consumerKey: Common.config.get('twitter:consumer_key'),
    consumerSecret: Common.config.get('twitter:consumer_secret'),
    callbackURL: '/auth/twitter/callback'
}, function (token, tokenSecret, profile, done) {
    Common.User.findOne({id: profile.id}, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            Common.Twit.get('followers/ids', {id: profile._json.id}, function (err, reply, response) {
                if (err) {
                    log.error(err);
                }
                user = new Common.User({
                    id: profile._json.id,
                    name: profile._json.name,
                    screen_name: profile._json.screen_name,
                    profile_image_url: profile._json.profile_image_url,
                    created_at: Common.moment(profile._json.created_at).unix(),
                    followers_count: profile._json.followers_count,
                    followers_ids: reply.ids
                });
                user.save(function (err) {
                    if (err) Common.log.info(err);
                    return done(err, user);
                });
            });
        } else {
            return done(err, user);
        }
    });
}));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    Common.User.findOne({
        id: user.id
    }, function (err, user) {
        done(err, user);
    });
});

app.get('/auth/twitter/callback',
    passport.authenticate('twitter', { successRedirect: '/tweets',
        failureRedirect: '/login' }));

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/tweets/:hashtag', Common.api);

app.get('/users/:hashtag', Common.users);

require('routes')(app, io);

server.requests.subscribe(function(data) {
});

server.listen(Common.config.get('port'), function () {
    var port = Common.config.get('port');
    Common.log.info("Express server listening on port " + port);
});