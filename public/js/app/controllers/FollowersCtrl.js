angular.module('app.FollowersCtrl', [])
    .controller('FollowersCtrl', ['$scope', 'socket', function ($scope, socket) {
        $scope.followers = [];
        socket.on('follow', function(data) {
            var user = data.user;
            $scope.followers.push(user);
        });
    }]);