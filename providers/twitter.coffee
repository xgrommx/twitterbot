Twit = require 'twit'
config = require 'config'

T = new Twit {
  consumer_key: config.get 'twitter:consumer_key'
  consumer_secret: config.get 'twitter:consumer_secret'
  access_token: config.get 'twitter:access_token'
  access_token_secret: config.get 'twitter:access_token_secret'
}

exports.Twit = T