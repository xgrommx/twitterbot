angular.module('app.GroupTweetCtrl', []).controller('GroupTweetCtrl', [
    '$scope', '$rootScope', 'socket', 'TransferService', function($scope, $rootScope, socket, TransferService) {
        $scope.groupTweets = [];
        var tempGroupTweets = [];
        var updateGroupTweets = function(tempData) {
            var data = tempData.distinct(function(n) {
                return n.id;
            }).where(function(n) {
                return n.followers_count > 1000;
            }).groupBy(function(item) {
                    return item.user_id;
                }, function(item) {
                    return item;
                }, function(id, enumOjs) {
                    return {
                        count: enumOjs.count(),
                        item: enumOjs.first()
                    };
                }).orderByDescending(function(item) {
                    return item.item.followers_count;
                }).thenByDescending(function(item) {
                    return item.count;
                }).toArray();
            $rootScope.groupTweetsCount = data.length;
            $scope.groupTweets = data;
        };
        $rootScope.groupTweetsCount = 0;

        $scope.$on('$destroy', function() {
            console.log('GroupTweetCtrl has been destroyed');
        });

        $scope.$onRootScope('broadcast:tweets', function(event) {
            var tweets = TransferService.tweets;
            tempGroupTweets = tweets;
            updateGroupTweets(tempGroupTweets);
        });

        getTweetFromSocket(socket, function(tweet) {
            tempGroupTweets.push(tweet);
            updateGroupTweets(tempGroupTweets);
        });
    }]);