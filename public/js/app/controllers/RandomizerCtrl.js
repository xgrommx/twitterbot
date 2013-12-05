(function(ng, $) {
    var RandomizerCtrl = function($scope, UserResource) {
        $scope.users = [];

        $scope.getWinners = function(hashtag) {
            UserResource.getUsers({hashtag: hashtag}).$promise.then(function(data) {
                $scope.users = data.users.shuffle().toArray();
            });
        };
    };

    RandomizerCtrl.$inject = ['$scope', 'UserResource'];

    ng.module('app.RandomizerCtrl', []).controller('RandomizerCtrl', RandomizerCtrl);
} (angular, jQuery));