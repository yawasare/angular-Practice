'use strict';

angular
    .module('app.story.route', ['ngRoute'])
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/storyDetails',{
            templateUrl: 'app/storyDetails/StoryDetails.html',
            controller: 'StoryController',
            controllerAs: 'vm'
        });
}