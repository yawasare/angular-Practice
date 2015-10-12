'use_strict';

angular.module('tholosapp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginController'
  });
}])

.controller('LoginController', ['$scope','$location','$rootScope', function($scope) {
      $scope.noerror = true;
      $scope.submit = function() {
        if ($scope.username=="user1" && $scope.password=="pass1") {
          $rootScope.user = $scope.username;
          $location.path( "/landing" );
        }
        else{
          $scope.noerror = false;
        }
      };
    }]);
