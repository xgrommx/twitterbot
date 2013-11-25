angular.module('app.TransferService', []).config(['$provide', function ($provide) {
        $provide.decorator('$rootScope', ['$delegate', function ($delegate) {
            Object.defineProperty($delegate.constructor.prototype, '$onRootScope', {
                value: function (name, listener) {
                    var unSubscribe = $delegate.$on(name, listener);
                    this.$on('$destroy', unSubscribe);
                },
                enumerable: false
            });

            return $delegate;
        }]);
    }]).factory('TransferService', ['$rootScope', 'MongoResource', 'socket',
        function ($rootScope, MongoResource, socket) {
            var service = {};
            service.tweets = [];
            service.getItemsBroadcast = function() {
                $rootScope.$broadcast('broadcast:tweets');
            };
            service.getTweetsFromMongo = function (hashtag) {
                MongoResource.getTweets({hashtag: hashtag}).$promise.then(function(data) {
                    service.tweets = data.tweets;
                    service.getItemsBroadcast();
                });
            };
            return service;
        }]);