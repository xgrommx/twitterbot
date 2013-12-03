var mongoose = require('lib/mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String
    },
    screen_name: {
        type: String
    },
    profile_image_url: {
        type: String
    },
    followers_count: {
        type: Number
    },
    followers_ids: {
        type: [Number]
    },
    created_at: {
        type: Number,
        "default": moment().unix()
    },
    lang: {
        type: String
    }
});


exports.User = mongoose.model('User', UserSchema);