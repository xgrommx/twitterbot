var User = require('models/user').User;
var Tweet = require('models/tweet').Tweet;
var Enumerable = require('lib/linq');

exports.users = function(req, res, next) {
    var hashtag = req.params.hashtag;

    if(typeof hashtag !== 'undefined') {
        Tweet.find({hashtag: hashtag}).populate('user').exec(function(err, tweets) {
            var data = Enumerable.from(tweets).distinct(function(tweet) {
                return tweet.user.id;
            }).select(function(data) {
                return {
                    id: data.user.id,
                    screen_name: data.user.screen_name
                };
            }).toArray();

            res.json({users: data});
        });
    }
};