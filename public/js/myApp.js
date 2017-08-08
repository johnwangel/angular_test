/*jshint esversion: 6 */
// creation uses a 2nd array argument to import dependencies
angular.module('myApp', []);

// retrieval has only one argument
var myApp = angular.module('myApp');

myApp
.config(function(){
    // config
})
.run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION){
    // initialize
    console.log("running");
    $rootScope.version = APP_VERSION;
}]);

// // ALTERNATE WAY TO CODE THE ABOVE
// var myApp = angular.module('myApp');

// myApp.controller('MyController', function(){

// });

// myApp.controller('MyController', ['$scope', function($scope){

// });
// $scope

