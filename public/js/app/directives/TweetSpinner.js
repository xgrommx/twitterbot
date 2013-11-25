angular.module('app.TweetSpinner', [])
    .constant('_START_REQUEST_', '_START_REQUEST_')
    .constant('_END_REQUEST_', '_END_REQUEST_')
    .config(['$injector', '$provide', '$httpProvider', '_START_REQUEST_', '_END_REQUEST_',
        function ($injector, $provide, $httpProvider, _START_REQUEST_, _END_REQUEST_) {
            $provide.factory('TweetHttpInterceptor', function ($q, $rootScope, $injector) {
                return {
                    request: function (config) {
                        var $http;
                        $http = $http || $injector.get('$http');
                        if ($http.pendingRequests.length < 1) {
                            $rootScope.$broadcast(_START_REQUEST_);
                        }
                        return config || $q.when(config);
                    },
                    requestError: function (rejection) {
                        return $q.reject(rejection);
                    },
                    response: function (response) {
                        var $http;
                        $http = $http || $injector.get('$http');
                        if ($http.pendingRequests.length < 1) {
                            $rootScope.$broadcast(_END_REQUEST_);
                        }
                        return response || $q.when(response);
                    },
                    responseError: function (rejection) {
                        return $q.reject(rejection);
                    }
                };
            });
            $httpProvider.interceptors.push('TweetHttpInterceptor');
        }
    ]).directive('loader', [
        '_START_REQUEST_', '_END_REQUEST_', function (_START_REQUEST_, _END_REQUEST_) {
            return {
                restrict: "A",
                link: function (scope, element) {
                    var l;
                    l = Ladda.create(element.get(0));
                    scope.$on(_START_REQUEST_, function () {
                        l.start();
                    });
                    scope.$on(_END_REQUEST_, function () {
                        l.stop();
                    });
                }
            };
        }
    ]);