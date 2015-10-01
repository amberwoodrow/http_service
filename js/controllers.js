app.controller('myController', function($scope, $http) {
  $scope.greeting = "Hello World!";

  $http.get('https://api.github.com/zen').then(function(data){
    $scope.zenData = data.data;
  });

  $http.get('./itunes.json').then(function(data){
    $scope.jackJohnsonSongs = [];
    for (var i=0; i<data.data.results.length; i++) {
      $scope.jackJohnsonSongs.push(data.data.results[i].trackName);
    }
  }); // run superstatic to see/use the json/backend

});
