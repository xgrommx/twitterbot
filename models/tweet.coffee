mongoose = require 'lib/mongoose'
Schema = mongoose.Schema

TweetSchema = new Schema {
  id: {
    type: Number
    unique: on
    required: on
  }
  hashtag: {
    type: String
  }
  text: {
    type: String
  }
  source: {
    type:String
  }
  retweted: {
    type: Boolean
  }
  retweet_count: {
    type: Number
  }
  created_at: {
    type: Date
    default: Date.now
  }
  user: {
    type: Schema.Types.ObjectId
    ref: 'User'
  }
}

# TODO: implementation other methods must be below

exports.Tweet = mongoose.model 'Tweet', TweetSchema