// $http.get('https://api.github.com/zen').then(function(data){
//     $scope.zenData = data;
// });

app.factory('HTTPfactory', ['$http', function($http){
 var obj = {};

  // get request
 // obj.get = function() {
 //   return $http.get('https://api.github.com/zen');
 // };

 // obj.get = function() {
 //   return $http.get('./itunes.json');
 // };

  // obj.get = function() {
  //   return $http.get('https://githfgtrh4g34rf34fcub.com/zenny');
  // };

  obj.get = function() {
    return $http.get('https://shielded-peak-6345.herokuapp.com/');
  };

  obj.post = function() {
    return $http.get('https://shielded-peak-6345.herokuapp.com/');
  };

 return obj;
}]);