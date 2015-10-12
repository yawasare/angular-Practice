'use strict';

angular
    .module('app.weather.route', ['ngRoute'])
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/weatherDetails',{
            templateUrl: 'app/weather/WeatherDetails.html',
            controller: 'WeatherController',
            controllerAs: 'vm'
        });
}
