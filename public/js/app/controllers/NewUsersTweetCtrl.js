angular.module('app.NewUsersTweetCtrl', [])
    .controller('NewUsersTweetCtrl', ['$scope', '$rootScope', 'socket', 'TransferService',
        function ($scope, $rootScope, socket, TransferService) {
            $rootScope.newUsersTweetCount = 0;
            $scope.newUsersTweets = [];

            $scope.$onRootScope('broadcast:tweets', function (event) {
                var tweets = TransferService.tweets;
                $scope.newUsersTweets = filterNewUsers(tweets);
                $rootScope.newUsersTweetCount = $scope.newUsersTweets.length;
            });

            getTweetFromSocket(socket, function(tweet) {
                $scope.newUsersTweets.push(tweet);
                $scope.newUsersTweets = filterNewUsers($scope.newUsersTweets);
                $rootScope.newUsersTweetCount = $scope.newUsersTweets.length;
            });
        }]);