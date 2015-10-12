'use strict';

angular
    .module('app.weather', ['app.weather.route','app.weather.WeatherService'])
    .controller('WeatherController', WeatherController);

WeatherController.$inject = ['WeatherService','$log', '$location'];

function WeatherController(WeatherService,$log, $location) {
    var vm = this;

    vm.pageTitle = "Weather Details";
    vm.weather =[];

    vm.goHome =goHome;

    getWeatherInfo();

    /*get weather info*/
    function getWeatherInfo(){
        return getWeather().then(function() {
            $log.info('Activated Weather View');
        });
    }

    function getWeather() {
        return WeatherService.getWeather()
            .then(function(data) {
                vm.weather = data;
                return vm.weather;
            });
    }

    /*goHome*/
    function goHome(){
        $location.path('/home');
    }
}