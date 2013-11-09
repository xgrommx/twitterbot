Tweet = require('models/tweet').Tweet
User = require('models/user').User
Twit = require('providers/twitter').Twit
Rx = require 'lib/rx.twitter.stream'

module.exports = {
                  tweetReader: (socket) ->
                                  socket.on 'get:tweet', (data) ->
                                    stream = Twit.stream('statuses/filter', { track: '#' + data.message, language: 'en' })
                                    twitStream = Rx.Node.fromTwitterStream(stream)
                                    twitStream.subscribe((tweet) ->
                                      socket.emit 'send:tweet', {tweet: tweet}
                                      twitterUser = tweet.user
                                      appUser = null

                                      User.findOne {id: twitterUser.id}, (err, user) ->
                                        if user
                                          appUser = user
                                        else
                                          appUser = new User {
                                            id: twitterUser.id
                                            name: twitterUser.name
                                            screen_name: twitterUser.screen_name
                                            profile_image_url: twitterUser.profile_image_url
                                            created_at: new Date twitterUser.created_at
                                            followers_count: twitterUser.followers_count
                                          }
                                          appUser.save (err) ->
                                            console.log err
                                            return

                                        tweet = new Tweet {
                                          id: tweet.id
                                          hashtag: data.message
                                          text: tweet.text
                                          source: tweet.source
                                          retweted: tweet.retweted
                                          retweet_count: tweet.retweet_count
                                          created_at: new Date tweet.created_at
                                          user: appUser._id
                                        }
                                        tweet.save (err) ->
                                          console.log err
                                          return
                                        return
                                    )
                                    twitStream.filter((tweet) -> tweet.user.followers_count > 10)
                                    .subscribe((tweet) ->
                                        socket.emit 'send:vip', {tweet: tweet}
                                        return
                                      )
                                    return
                                  return
                }