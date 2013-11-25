var tweetReader = require('routes/socket');

exports.tweets = function(req, res, io) {
    io.sockets.on('connection', function(socket) {
        tweetReader(socket, req, res);
    });
    res.render('tweets');
};