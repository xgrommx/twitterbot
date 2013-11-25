/**
 * Animation function for show a new tweet on a tweet board.
 */
angular.module('app.TweetAnimation', [])
    .animation('.tweet-animation', function () {
        return {
            enter: function (element, done) {
                $(element).animo({
                    animation: 'fadeInDown',
                    duration: 0.5,
                    keep: true
                }, done());
            },
            leave: function (element, done) {
                $(element).animo({
                    animation: 'fadeOutDown',
                    duration: 0.5,
                    keep: true
                }, done());
            }
        };
    });