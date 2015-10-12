'use_strict';

angular.module('tholosapp', [
                'ngRoute',
                'tholosapp.login']).
                config(['$routeProvider', function($routeProvider) {
                  $routeProvider.otherwise({redirectTo: '/login'});
                }]);
