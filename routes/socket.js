var moment = require('moment');
var Tweet = require('models/tweet').Tweet;
var User = require('models/user').User;
var Twit = require('providers/twitter').Twit;
var Spam = require('models/spam').Spam;
var Rx = require('lib/rx.twitter.stream');
var log = require('lib/log')(module);

function tweetReader(socket, req, res) {
    socket.on('get:tweet', function (data) {
        var hashtag = data.hashtag;
        var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ];

        var rxStream = Rx.Node.fromTwitterStream(
            Twit.stream('statuses/filter', {track: '#' + hashtag}), 'tweet');

        var userStream = Twit.stream('user', {id: req.user.id});
        var followStream = Rx.Node.fromTwitterStream(userStream, 'follow');
        var unFollowStream = Rx.Node.fromTwitterStream(userStream, 'unfollow');
        followStream.merge(unFollowStream).filter(function (data) {
            return data != null && data.target != null && data.target.id === req.user.id
        }).subscribe(function (data) {
                if(!req.user.followers_ids.indexOf(data.source.id) >= 0) {
                    User.update({id: req.user.id}, {$push:{followers_ids: data.source.id}}, function(err, affected) {
                        socket.emit('follow', { user: data.source });
                        req.user.followers_ids.push(data.source.id);
                    });
                }
            });

        rxStream.map(function (tweet) {
            if (typeof tweet.created_at !== 'number') {
                tweet.created_at = moment(tweet.created_at).unix();
                tweet.user.created_at = moment(tweet.user.created_at).unix();
            }
            if(req.user.followers_ids.indexOf(tweet.user.id) >= 0) {
                tweet.follower = true;
            }

            return tweet;
        }).subscribe(function (tweet) {
                var twitterUser = null;
                var twitterData = null;

                socket.emit('send:tweet', {tweet: tweet});

                User.findOne({id: tweet.user.id}, function (err, user) {
                    if (user) {
                        twitterUser = user;
                    } else {
                        twitterUser = new User({
                            id: tweet.user.id,
                            name: tweet.user.name,
                            screen_name: tweet.user.screen_name,
                            profile_image_url: tweet.user.profile_image_url,
                            created_at: tweet.user.created_at,
                            followers_count: tweet.user.followers_count
                        });
                        twitterUser.save(function (err, user) {
                            if (err) {
                                log.error(err.message);
                            }
                        });
                    }
                    if (tweet.coordinates != null) {
                        twitterData = new Tweet({
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
                        twitterData = new Tweet({
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
                            log.error(err.message);
                        }
                    });
                });
                Spam.findOne({
                    id: tweet.user.id,
                    hashtag: hashtag,
                    date: {
                        $gte: moment().startOf('day').unix(),
                        $lte: moment().unix()
                    }}, function (err, spam) {
                    if (!spam) {
                        var spamData = new Spam({
                            id: tweet.user.id,
                            tweet_id: tweet.id,
                            hashtag: hashtag,
                            date: moment().unix(),
                            count_of_tweets: 1
                        });
                        spamData.save(function (err, spam) {
                            if (err) {
                                log.error(err.message);
                            }
                        });
                    } else {
                        Spam.update({id: spam.id}, {$inc: {count_of_tweets: 1}}, function (err, affected) {
                            log.info(affected, 'affected');
                        });
                    }
                });
            });
    });
}

module.exports = tweetReader;