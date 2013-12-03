angular.module('app.ChartTweetCtrl', []).controller('ChartTweetCtrl', [
    '$scope', '$rootScope', 'socket', 'TransferService', function($scope, $rootScope, socket, TransferService) {
        var tempTweetsChart = [];

        /**
         * Get tweets between two dates.
         * @param tweets
         * @param start
         * @param end
         * @returns {An}
         */
        var getTweetsByPeriod = function(tweets, start, end) {
            return tweets.distinct(function(n) {
                return n.id;
            }).where(function(n) {
                return n.created_at <= end && n.created_at >= start;
            }).toArray();
        };

        /**
         * Grouping tweets by a hour.
         * @param tweets
         * @returns {Array}
         */
        var getGroupedTweets = function(tweets) {
            var data, hours;
            hours = Enumerable.range(0, 24).toArray();
            data = [];
            hours.forEach(function(n) {
                var hour, length;
                hour = n;
                length = tweets.filter(function(n) {
                    var _ref;
                    return (hour - 1 <= (_ref = parseInt(moment.unix(n.created_at).get('hour'))) && _ref <= hour);
                }).length;
                data.push([hour, length]);
            });
            return data;
        };

        /**
         * Update data on a chart.
         */
        var updateData = function() {
            $scope.perDayTweets = getTweetsByPeriod(tempTweetsChart, $scope.lastTimePeriod, $scope.rightNowPeriod);
            $scope.networkExposure = $scope.perDayTweets.distinct("$.user_id").sum("$.followers_count");
            $scope.perDayTweetsCount = $scope.perDayTweets.length;
            $scope.data.data[0].data = getGroupedTweets($scope.perDayTweets);
        };

        angular.extend($scope, {
            data: {
                data: [
                    {
                        data: [],
                        label: 'Tweet chart',
                        lines: {
                            show: true,
                            steps: false,
                            xaxis: 1
                        },
                        bars: {
                            show: false
                        },
                        points: {
                            show: false,
                            radius: 8
                        }
                    }
                ],
                options: {
                    colors: ["#53b5e6"],
                    xaxes: [
                        {
                            ticks: Enumerable.range(0, 24).toArray()
                        }
                    ]
                }
            },
            lastTimePeriod: moment().startOf('day').unix(),
            rightNowPeriod: moment().unix()
        });

        $scope.$onRootScope('broadcast:tweets', function(event) {
            var tweets = TransferService.tweets;
            $scope.rightNowPeriod = moment().unix();
            tempTweetsChart = tweets;
            updateData();

            getTweetFromSocket(socket, $rootScope.hashtag, function(tweet) {
                tempTweetsChart.push(tweet);
                $scope.rightNowPeriod = moment().unix();
                updateData();
            });
        });
    }
]);