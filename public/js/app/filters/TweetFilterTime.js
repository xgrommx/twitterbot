angular.module('app.TweetFilterTime', [])
    .filter('timeAgoFormat', [
        '$window', function ($window) {
            return function (value, format) {
                return $window.moment.unix(value).fromNow();
            };
        }
    ]).filter('twitterFormat', [
        '$window', function ($window) {
            return function (value, format) {
                return $window.moment.unix(value).twitter();
            };
        }
    ]).filter('timeFormat', [
        '$window', function ($window) {
            return function (value, format) {
                return $window.moment.unix(value).format(format);
            };
        }
    ]).filter("as", function ($parse) {
        return function (value, path) {
            return $parse(path).assign(this, value);
        };
    });