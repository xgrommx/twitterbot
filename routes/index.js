var auth = require('middlewares/authorization');

module.exports = function(app, io) {
    app.get('/', auth.requiresLogin, function(req, res) {
        res.redirect('/tweets');
    });

    app.get('/tweets', auth.requiresLogin, function(req, res) {
        require('routes/tweets').tweets(req, res, io);
    });

    app.get('/login', require('routes/login').login);

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });
};