exports.login = function(req, res) {
    if(req.isAuthenticated()) {
        res.redirect('/tweets');
    } else {
        res.render('login');
    }
};