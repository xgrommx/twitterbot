angular.module('app.MongoResource', []).factory('MongoResource', ['$resource', function ($resource) {
    return $resource('/tweets/:hashtag', {}, {
        getTweets: {
            method: 'GET',
            params: {hashtag: '@hashtag'}
        }
    });
}]);