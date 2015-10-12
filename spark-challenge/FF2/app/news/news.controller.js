'use strict';

angular
    .module('app.news', ['app.news.route','app.news.NewsService'])
    .controller('NewsController', NewsController);

NewsController.$inject = ['NewsService','$log', '$location', '$sce'];

function NewsController(NewsService, $log, $location, $sce, $rootScope) {
    var vm = this;

    vm.pageTitle = "News Source Details";
    vm.newsDetails = [];

    vm.goHome =goHome;
    vm.getTrustedHtml = getTrustedHtml;

    getNewsDetailsInfo(NewsService.newsSource);

    /*get news details*/
    function getNewsDetailsInfo(source){
        return getNewsDetails(source).then(function() {
            $log.info('Activated News details View');
        });
    }

    function getNewsDetails(source) {
        return NewsService.getNewsDetails('assets/'+source)
            .then(function(data) {
                vm.newsDetails = data;
                return vm.newsDetails;
            });
    }

    /*goHome*/
    function goHome(){
        $location.path('/home');
    }

    /*getTrustedHtml*/
    function getTrustedHtml(string){
        return $sce.trustAsHtml(string)
    }

}
