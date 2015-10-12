angular
    .module('app.story.StoryService',[])
    .factory('StoryService', StoryService);

StoryService.$inject = ['$http','$log'];

function StoryService($http,$log) {
    return {
        getStory: getStory
    };

    /*get weather info*/
    function getStory() {
        return $http.get('assets/data/storyDetails.json')
            .then(getStoryComplete)
            .catch(getStoryFailed);

        function getStoryComplete(response) {
            return response.data;
        }

        function getStoryFailed(error) {
            $log.error('XHR Failed for getNews.' + error.data);
        }
    }

}