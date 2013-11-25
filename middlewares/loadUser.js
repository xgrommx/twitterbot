var User = require('models/user').User;

module.exports = function(req, res, next) {
    req.user = res.locals.user = null;
    if (typeof req.session.passport !== 'undefined') {
        if (!req.session.passport.user) return next();

        User.findOne({id: req.session.passport.user.id}, function (err, user) {
            if (err) return next(err);

            req.user = res.locals.user = user;
            next();
        });
    } else {
        return next();
    }
};