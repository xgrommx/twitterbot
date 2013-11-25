angular.module('app.SpamUsersTweetCtrl', [])
    .controller('SpamUsersTweetCtrl', ['$scope', '$rootScope', 'TransferService', 'socket',
        function ($scope, $rootScope, TransferService, socket) {
            var spamUsersTemp = [];

            $rootScope.spamUsersCount = 0;
            $scope.spamUsers = [];

            var update = function(tweets) {
              var data = tweets.distinct(function(t) {
                  return t.id;
              }).groupBy(function(t) {
                  return t.user_id
              }, function(t) {
                  return t;
              }, function (user_id, enumObj) {
                  return {
                      count_of_tweets: enumObj.count(),
                      item: enumObj.first()
                  }
              }).where(function (t) {
                      return t.count_of_tweets > 1 &&
                          t.item.created_at > moment().startOf('day').unix() &&
                          t.item.created_at < moment().unix();
                  }).orderByDescending(function(t) {
                      return t.count_of_tweets;
                  }).toArray();

                $rootScope.spamUsersCount = data.length;
                $scope.spamUsers = data;
            };

            $scope.$onRootScope('broadcast:tweets', function (event, data) {
                spamUsersTemp = TransferService.tweets;
                update(spamUsersTemp);
            });

            getTweetFromSocket(socket, function(tweet) {
                spamUsersTemp.push(tweet);
                update(spamUsersTemp);
            });
        }]);