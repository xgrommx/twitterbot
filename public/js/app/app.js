angular.module('app', [
        'app.MongoResource',
        'app.TransferService',
        'app.TweetCtrl',
        'app.GroupTweetCtrl',
        'app.NewUsersTweetCtrl',
        'app.HoboUsersTweetCtrl',
        'app.GoogleMapTweetCtrl',
        'app.SpamUsersTweetCtrl',
        'app.ChartTweetCtrl',
        'app.TweetSpinner',
        'app.TweetFilterTime',
        'app.TweetAnimation',
        'app.FollowersCtrl',
        'app.LangTweetCtrl',
        'ngAnimate',
        'ngResource',
        'google-maps',
        'angular.flot',
        'btford.socket-io'
    ]).run(function () {
        Enumerable.Utils.extendTo(Array);
    }).constant({socketUrl: 'http://localhost', guid: guid()}).config(function (socketProvider, socketUrl, $provide, $locationProvider) {
//        var appSocket = io.connect(socketUrl, {});
//        socketProvider.ioSocket(appSocket);
    });

(function($) {
    $(function() {
        angular.bootstrap($('#app'), ['app']);
    });
})(jQuery);