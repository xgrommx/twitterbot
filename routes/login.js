var TwitterBot;

(function(TwitterBot) {
    var LoginController = (function() {
        /**
         * Constructor
         * @constructor
         */
        function LoginController() {}

        /**
         * Static method from LoginController.
         * @param req
         * @param res
         */
        LoginController.login = function(req, res) {
            if(req.isAuthenticated()) {
                res.redirect('/tweets');
            } else {
                res.render('login');
            }
        };

        return LoginController;
    })();

    TwitterBot.LoginController = LoginController;

})(TwitterBot || (TwitterBot = {}));



//var LoginController = {
//    login: function(req, res) {
//        if(req.isAuthenticated()) {
//            res.redirect('/tweets');
//        } else {
//            res.render('login');
//        }
//    }
//};


module.exports = TwitterBot.LoginController;