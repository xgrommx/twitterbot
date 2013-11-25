var Common = {
    Rx: require('lib/rx.twitter.stream'),
    express: require('express'),
    http: require('http'),
    path: require('path'),
    Tweet: require('models/tweet').Tweet,
    User: require('models/user').User,
    Twit: require('providers/twitter').Twit,
    log: require('lib/log')(module),
    config: require('config'),
    routes: require('routes'),
    api: require('routes/tweet').tweet,
    moment: require('moment'),
    mongoose: require('lib/mongoose')
};

module.exports = Common;