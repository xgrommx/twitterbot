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
        'ngAnimate',
        'ngResource',
        'google-maps',
        'angular.flot',
        'btford.socket-io'
    ]).run(function () {
        Enumerable.Utils.extendTo(Array);
    }).constant({socketUrl: 'http://localhost'}).config(function (socketProvider, socketUrl) {
        var appSocket = io.connect(socketUrl, {});
        socketProvider.ioSocket(appSocket);
    });