var mongoose = require('lib/mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var SpamSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    tweet_id: {
        type: Number,
        unique: true
    },
    hashtag: {
        type: String
    },
    date: {
        type: Number,
        "default": moment().unix()
    },
    count_of_tweets: {
        type:Number,
        "default": 0
    }
});

exports.Spam = mongoose.model('Spam', SpamSchema);