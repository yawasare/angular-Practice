'use strict';

angular
    .module('app.home', [
        'app.home.route',
        'app.home.sparkService',
        'app.weather.WeatherService',
        'app.home.appService',
        'app.news.NewsService'
    ])
    .controller('HomeController', HomeController);

HomeController.$inject = ['sparkService', 'WeatherService', 'NewsService','appService','$log','$location'];

function HomeController(sparkService, WeatherService, NewsService, appService, $log, $location) {

    var vm = this;
    vm.user = "Jack Jones";
    vm.loginModal = false;

    vm.appUrl = "";

    vm.weather =[];
    vm.apps =[];
    vm.latestNews =[];
    vm.newsFeed =[];
    vm.sparks =[];
    vm.stories = [];
    vm.descriptions = [];

    getWeatherInfo();
    getAppInfo();
    getLatestNewsInfo();
    getNewsFeedInfo();
    getSparkInfo();

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

    /*get apps*/
    function getAppInfo(){
        return getApp().then(function() {
            $log.info('Activated App View');
        });
    }

    function getApp() {
        return appService.getApps()
            .then(function(data) {
                vm.apps = data.features;
                return vm.apps;
            });
    }

    /*get latest news*/
    function getLatestNewsInfo(){
        return getLatestNews().then(function() {
            $log.info('Activated Latest News View');
            getStories('examplefeeds/' + vm.latestNews.source);
        });
    }

    function getLatestNews() {
        return NewsService.getLatestNews()
            .then(function(data) {
                vm.latestNews = data;
                return vm.latestNews;
            });
    }

    /*get news feed*/
    function getNewsFeedInfo(){
        return getNewsFeed().then(function() {
            $log.info('Activated News Feed View');
        });
    }

    function getStories(source) {
      return NewsService.getStories(source)
          .then(function(data) {
              vm.stories = data.channel.item.slice(0,8);
              return vm.stories;
          });
    }

    function getFirstStory(source) {
      return NewsService.getStories(source)
          .then(function(data) {
              var story = data.channel.item[0].title;
              return story;
          });
    }

    function getNewsFeed() {
        return NewsService.getNewsFeed()
            .then(function(data) {
                vm.newsFeed = data.splice(1,6) || data;
                for ( var i = 0; i < vm.newsFeed.length; i++) {
                  vm.descriptions.push(getFirstStory( 'examplefeeds/' + vm.newsFeed[i].source));
                }
                console.log(vm.newsFeed);
                return vm.newsFeed;
            });
    }

    var setNews = function setNewsSource(source) {
      NewsService.newsSource = source;
      console.log('set source ' + source);
      $location.path('#/newsDetails');
    }

    /*get spark*/
    function getSparkInfo(){
        return getSpark().then(function() {
            $log.info('Activated Spark View');
        });
    }

    function getSpark() {
        return sparkService.getSparks()
            .then(function(data) {
                vm.sparks = data;
                return vm.sparks;
            });
    }

    /*detect mobile browser*/
    vm.isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone | iPad | iPod/i)
        }
    };

    if(vm.isMobile.Android()) {
        vm.appUrl='https://play.google.com/store/apps/details?id='
    }else{
        vm.appUrl ="https://itunes.apple.com/app/"
    }
}
