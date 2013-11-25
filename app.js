var Common, app, io, server;
var fs = require('fs');
var expose = require('express-expose');

Common = require('lib/common');
app = Common.express();
server = Common.http.createServer(app);
io = require('socket.io').listen(server, Common.config.get('socket.io'));

var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var MongoStore = require('connect-mongo')(Common.express);

app.locals.pretty = true;

app.use(Common.express.compress({
    filter: function(req, res) {
        return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
    },
    level: 9
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(Common.express.favicon());
app.use(Common.express.logger('dev'));
app.use(Common.express.bodyParser());
app.use(Common.express.cookieParser());
//app.use(Common.express.cookieSession({
//    secret: 'twitter'
//}));
app.use(Common.express.session({
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

passport.use(new TwitterStrategy({
    consumerKey: Common.config.get('twitter:consumer_key'),
    consumerSecret: Common.config.get('twitter:consumer_secret'),
    callbackURL: '/auth/twitter/callback'
}, function(token, tokenSecret, profile, done) {
    Common.User.findOne({id: profile.id}, function(err, user) {
        if(err) {
            return done(err);
        }
        if(!user) {
            user = new Common.User({
                id: profile._json.id,
                name: profile._json.name,
                screen_name: profile._json.screen_name,
                profile_image_url: profile._json.profile_image_url,
                created_at: Common.moment(profile._json.created_at).unix(),
                followers_count: profile._json.followers_count
            });
            user.save(function(err) {
                if(err) Common.log.info(err);
                return done(err, user);
            });
        } else {
            return done(err, user);
        }
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    Common.User.findOne({
        id: user.id
    }, function(err, user) {
        done(err, user);
    });
});

app.get('/auth/twitter/callback',
    passport.authenticate('twitter', { successRedirect: '/tweets',
        failureRedirect: '/login' }));

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/tweets/:hashtag', Common.api);

require('routes')(app, io);
//app.get('/tweets', function(req, res) {
//    if(req.user) {
//        Common.routes.index(req, res);
//    } else {
//        res.redirect('/login');
//    }
//});

server.listen(Common.config.get('port'), function () {
    var port = Common.config.get('port');
    Common.log.info("Express server listening on port " + port);
});