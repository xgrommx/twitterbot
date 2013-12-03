angular.module('app.GoogleMapTweetCtrl', []).controller('GoogleMapTweetCtrl', [
    '$scope', '$rootScope', 'TransferService', 'socket', function($scope, $rootScope, TransferService, socket) {
        var tempMarkers = [];
        angular.extend($scope, {
            center: {
                latitude: 49.83826,
                longitude: 24.02324
            },
            zoom: 8,
            markers: []
        });

        $scope.$onRootScope('broadcast:tweets', function(event) {
            tempMarkers = TransferService.tweets.where(function(n) {
                return n.longitude != null && n.latitude != null;
            }).toArray();
            $scope.markers = tempMarkers.groupBy("$.longitude", "$", function(key, enumObj) {
                return {
                    longitude: enumObj.first().longitude,
                    latitude: enumObj.first().latitude,
                    infoWindow: enumObj.count() + " Users from this"
                };
            }).toArray();

            getTweetFromSocket(socket, $rootScope.hashtag, function(tweet) {
                if(typeof tweet.longitude !== 'undefined' || typeof tweet.latitude !== 'undefined') {
                    tempMarkers.push(tweet);
                    $scope.markers = tempMarkers.groupBy("$.longitude", "$", function(key, enumObj) {
                        return {
                            longitude: enumObj.first().longitude,
                            latitude: enumObj.first().latitude,
                            infoWindow: enumObj.count() + " Users from this"
                        };
                    }).toArray();
                }
            });
        });
    }
]);