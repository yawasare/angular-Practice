'use strict';

angular
    .module('app.news.route', ['ngRoute'])
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/newsDetails',{
            templateUrl: 'app/news/NewsDetails.html',
            controller: 'NewsController',
            controllerAs: 'vm'
        });
}
