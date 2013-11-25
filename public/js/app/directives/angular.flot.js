angular.module('angular.flot', []).directive('flot', [function () {
    return {
        restrict: 'EA',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            var chart = null;
            var opts = {};
            var data = [];
            var id = attrs.id;
            var placeholder = $('#' + id);
            scope.$watch(function () {
                return ngModel.$modelValue;
            }, function (v) {
                if (!chart) {
                    chart = $.plot(placeholder, $.extend(true, data, v.data), $.extend(true, opts, v.options));
                } else {
                    chart.setData(v.data);
                    chart.setupGrid();
                    chart.draw();
                }
            }, true);
        }
    };
}]);