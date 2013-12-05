var Common = {
    Rx: require('lib/rx.twitter.stream'),
    express: require('express'),
    http: require('http'),
    path: require('path'),
    Tweet: require('models/tweet').Tweet,
    User: require('models/user').User,
    Spam: require('models/spam').Spam,
    Twit: require('providers/twitter').Twit,
    log: require('lib/log')(module),
    config: require('config'),
    routes: require('routes'),
    api: require('routes/tweet').tweet,
    users: require('routes/users').users,
    moment: require('moment'),
    mongoose: require('lib/mongoose')
};

module.exports = Common;