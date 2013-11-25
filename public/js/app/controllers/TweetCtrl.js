angular.module('app.TweetCtrl', []).controller('TweetCtrl',
    ['$scope', '$rootScope', 'TransferService', '$document', 'socket', '$filter', '$window',
        function ($scope, $rootScope, TransferService, $document, socket, $filter, $window) {
            var tempData = [];
            // Declare variable for $scope
            $scope.tweets = [];
            $rootScope.tweetsCount = 0;
            $rootScope.hashtag = 'apple';

            // Function for search tweets by a hashtag
            $rootScope.doSearch = function (hashtag) {
                $scope.tweets = [];
                TransferService.getTweetsFromMongo(hashtag);
                socket.emit('get:tweet', {hashtag: hashtag});
            };

            $scope.$onRootScope('broadcast:tweets', function (event, data) {
                var tweets = TransferService.tweets;
                tempData = tweets.distinct("$.id").toArray();
                $scope.tweets = tempData;
                $rootScope.tweetsCount = tempData.length;
            });

            // Subscribe on socket response from twitter stream.
            getTweetFromSocket(socket, function(tweet) {
                tempData.push(tweet);
                tempData = tempData.distinct("$.id").toArray();
                $scope.tweets = tempData;
                $rootScope.tweetsCount = tempData.length;
            });

            // Trigger function for search tweets if DOM is ready.
            angular.element($document).ready(function () {
                $rootScope.doSearch($scope.hashtag);
            });
        }]);