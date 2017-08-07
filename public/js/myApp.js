// creation uses a 2nd array argument to import dependencies
angular.module('myApp', []);

// retrieval has only one argument
var myApp = angular.module('myApp');

myApp
.config(function(){
    // config
})
.run(function(){
    // initialize
    console.log("running");
});

myApp.controller('MyController', ['$scope', function($scope) {
  $scope.myFirstName ='John';
  $scope.myModel = 'Ready Player One';
}]);

// // ALTERNATE WAY TO CODE THE ABOVE
// var myApp = angular.module('myApp');

// myApp.controller('MyController', function(){

// });

// myApp.controller('MyController', ['$scope', function($scope){

// });
// $scope

