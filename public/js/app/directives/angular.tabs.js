angular.module('app.angular.tabs', []).directive('tabs', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $(element).tab();
        }
    };
});