angular.module('app.HoboUsersTweetCtrl', []).controller('HoboUsersTweetCtrl', [
    '$scope', '$rootScope', 'socket', 'TransferService', function($scope, $rootScope, socket, TransferService) {
        var tempTweetsHoboUsers = [];
        var updateHoboUsers = function(tempData) {
            var data = tempData.distinct(function(n) {
                return n.user_id;
            }).where(function(n) {
                    return n.followers_count <= 10;
                }).orderBy(function(n) {
                    return n.followers_count;
                }).toArray();
            $rootScope.hoboUsersCount = data.length;
            $scope.hoboUsers = data;
        };

        $rootScope.hoboUsersCount = 0;
        $scope.hoboUsers = [];
        $scope.$onRootScope('broadcast:tweets', function(event) {
            var tweets = TransferService.tweets;
            tempTweetsHoboUsers = tweets;
            updateHoboUsers(tempTweetsHoboUsers);
        });

        getTweetFromSocket(socket, function(tweet) {
            tempTweetsHoboUsers.push(tweet);
            updateHoboUsers(tempTweetsHoboUsers);
        });
    }
]);