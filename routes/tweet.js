var Tweet = require('models/tweet').Tweet;
var User = require('models/user').User;
var log = require('lib/log')(module);

exports.tweet = function(req, res, next) {
    var hashtag = req.params.hashtag;
    if(typeof hashtag !== 'undefined') {
        Tweet.find({hashtag:hashtag}).populate('user').exec(function(err, tweets) {
            var data = tweets.map(function(tweet) {
                return {
                    id: tweet.id,
                    screen_name: tweet.user.screen_name,
                    text: tweet.text,
                    image: tweet.user.profile_image_url,
                    followers_count: tweet.user.followers_count,
                    created_at: tweet.created_at,
                    user_created_at: tweet.user.created_at,
                    user_id: tweet.user.id,
                    longitude: tweet.longitude,
                    latitude: tweet.latitude,
                    follower: req.user.followers_ids.indexOf(tweet.user.id) >= 0,
                    lang: tweet.user.lang
                };
            });

            res.json({tweets: data});
        });
    }
};