mongoose = require 'lib/mongoose'
Schema = mongoose.Schema

UserSchema = new Schema {
  id: {
    type: Number
    unique: on
    required: on
  }
  name: {
    type: String
  }
  screen_name: {
    type: String
  }
  profile_image_url: {
    type: String
  }
  followers_count: {
    type: Number
  }
  created_at: {
    type: Date
    default: Date.now
  }
}

# TODO: implementation other methods must be below

exports.User = mongoose.model 'User', UserSchema