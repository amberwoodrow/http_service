app.controller('myController', function($scope, HTTPfactory) {
  $scope.greeting = "Hello World!";

  // function getData() {
  //   HTTPfactory.get().success(function(response){
  //     $scope.zenData = response;
  //   })
  //   .error(function(error){
  //     console.log(error);
  //   });
  // }
  // getData();

  // function getSongs() {
  //   HTTPfactory.get().success(function(response){
  //     $scope.jackJohnsonSongs = [];
  //     for (var i=0; i<response.results.length; i++) {
  //       $scope.jackJohnsonSongs.push(response.results[i].trackName);
  //     }
  //   })
  //   .error(function(error){
  //     console.log(error);
  //   }); // run superstatic to see/use the json/backend
  // }
  // getSongs();

  // function getError() {
  //   HTTPfactory.get().success(function(response){
  //     $scope.notError = "hi";
  //   })
  //   .error(function(error){
  //     console.log("Dis link is " + error + ", yo");
  //   });
  // }
  // getError();

  function getData() {
    HTTPfactory.get().success(function(response){
      $scope.appData = response;
    })
    .error(function(error){
      console.log(error);
    });
  }
  getData();

  function postData(payload) {
    HTTPfactory.post(payload).success(function(response) {
     $scope.appData.push(payload);
     console.log(payload);
    })
    .error(function(data) {
     console.log('Error: ' + data);
    });
  }

  $scope.addPost = function() {
    var payload = {
      'name': $scope.name,
      'content': $scope.content,
    };
    postData(payload);
  };

});
