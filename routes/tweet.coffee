Tweet = require('models/tweet').Tweet
User = require('models/user').User

exports.tweets = (req, res, next) ->
  hashtag = req.params.hashtag
  if typeof hashtag is "undefined"
    return
  else
    Tweet.find({ hashtag: hashtag }).populate('user').exec (err, tweets) ->
      tweets = tweets.map (tweet) ->
        {
          id: tweet.user.id
          screen_name: tweet.user.screen_name
          text: tweet.text,
          image: tweet.user.profile_image_url
          followers: parseInt tweet.user.followers_count
          static: true
        }
      res.json { tweets: tweets }
      return
