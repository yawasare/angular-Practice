'use strict';

angular
    .module('app.story', ['app.story.route','app.story.StoryService'])
    .controller('StoryController', StoryController);

StoryController.$inject = ['StoryService','$log', '$location', '$sce'];

function StoryController(StoryService,$log, $location ,$sce) {
    var vm = this;

    vm.pageTitle = "Story Details";
    vm.storyDetails = [];

    vm.goHome = goHome;
    vm.getTrustedHtml = getTrustedHtml;

    getStoryDetails();

    /*get news details*/
    function getStoryDetails(){
        return getStory().then(function() {
            $log.info('Activated Story View');
        });
    }

    function getStory() {
        return StoryService.getStory()
            .then(function(data) {
                vm.storyDetails = data;
                return vm.storyDetails;
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