/*jshint esversion: 6 */
// creation uses a 2nd array argument to import dependencies
angular.module('myApp', []);

// retrieval has only one argument
let myApp = angular.module('myApp');

myApp
.config(function(){
    // config
})
.run(function(){
    // initialize
    console.log("running");
});

// // ALTERNATE WAY TO CODE THE ABOVE
// var myApp = angular.module('myApp');

// myApp.controller('MyController', function(){

// });

// myApp.controller('MyController', ['$scope', function($scope){

// });
// $scope

