'use strict';

angular
    .module('app.home.route', ['ngRoute'])
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/home',{
            templateUrl: 'app/home/Home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        });
}