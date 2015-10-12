angular
    .module('app.weather.WeatherService',[])
    .factory('WeatherService', WeatherService);

WeatherService.$inject = ['$http','$log'];

function WeatherService($http,$log) {
    return {
        getWeather: getWeather
    };

    /*get weather info*/
    function getWeather() {
        return $http.get('examplefeeds/weather/wx_mega_call.xml')
            .then(getWeatherComplete)
            .catch(getWeatherFailed);

        function getWeatherComplete(response) {
          var x2js = new X2JS();
          var json = x2js.xml_str2json(response.data);
          return json.locations.location;
        }

        function getWeatherFailed(error) {
            $log.error('XHR Failed for getWeather.' + error.data);
        }
    }
}
