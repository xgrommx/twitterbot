var mongoose = require('lib/mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var TweetSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    hashtag: {
        type: String
    },
    text: {
        type: String
    },
    source: {
        type:String
    },
    retweted: {
        type: Boolean
    },
    retweet_count: {
        type: Number
    },
    created_at: {
        type: Number,
        "default": moment().unix()
    },
    longitude: {
        type: Number
    },
    latitude: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

exports.Tweet = mongoose.model('Tweet', TweetSchema);