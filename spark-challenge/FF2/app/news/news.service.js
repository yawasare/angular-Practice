angular
    .module('app.news.NewsService',[])
    .factory('NewsService', NewsService);

NewsService.$inject = ['$http','$log'];

function NewsService($http,$log) {
    return {
        getNewsDetails: getNewsDetails,
        getNewsFeed: getNewsFeed,
        getLatestNews: getLatestNews,
        getStories: getStories,
        newsSource: newsSource
    };

    var newsSource = "";
    /*get weather info*/
    function getNewsDetails(source) {
        return $http.get(source)
            .then(getNewsComplete)
            .catch(getNewsFailed);

        function getNewsComplete(response) {
            return response.data;
        }

        function getNewsFailed(error) {
            $log.error('XHR Failed for getNews.' + error.data);
        }
    }

    function getNewsFeed() {
        return $http.get('examplefeeds/news/news_feeds.xml')
            .then(getNewsFeedComplete)
            .catch(getNewsFeedFailed);

        function getNewsFeedComplete(response) {
          var x2js = new X2JS();
          var json = x2js.xml_str2json(response.data);
          var news = json.news_feeds.news;
          console.log(news);
          return news;
        }

        function getNewsFeedFailed(error) {
            $log.error('XHR Failed for getNewsFeed.' + error.data);
        }
    }

    function getLatestNews() {
        return $http.get('examplefeeds/news/news_feeds.xml')
            .then(getLatestNewsComplete)
            .catch(getLatestNewsFailed);

        function getLatestNewsComplete(response) {
          var x2js = new X2JS();
          var json = x2js.xml_str2json(response.data);
          var news = json.news_feeds.news[0];
          return news;
        }

        function getLatestNewsFailed(error) {
            $log.error('XHR Failed for getLatestNews.' + error.data);
        }
    }

    function getStories(source){
      return $http.get(source)
          .then(getStoriesComplete)
          .catch(getStoriesFailed);

      function getStoriesComplete(response) {
        var x2js = new X2JS();
        var json = x2js.xml_str2json(response.data);
        return json;
      }

      function getStoriesFailed(error) {
          $log.error('XHR Failed for getStories.' + error.data);
      }
    }
}
