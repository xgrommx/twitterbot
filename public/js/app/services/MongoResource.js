angular.module('app.MongoResource', []).factory('MongoResource', ['$resource', function ($resource) {
    return $resource('/tweets/:hashtag', {}, {
        getTweets: {
            method: 'GET',
            params: {hashtag: '@hashtag'}
        }
    });
}]);

angular.module('app.UserResource', []).factory('UserResource', ['$resource', function($resource) {
    return $resource('/users/:hashtag', {}, {
        getUsers: {
            method: 'GET',
            params: {hashtag: '@hashtag'}
        }
    })
}]);