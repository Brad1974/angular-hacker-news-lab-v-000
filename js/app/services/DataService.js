function DataService($http) {

  this.getStoryIds = function() {
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  }

  this.getStoryInfo = function (id) {
     return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
   }


}

angular
    .module('app')
    .service('DataService', DataService);
