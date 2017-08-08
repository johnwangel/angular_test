/*jshint esversion: 6*/
var myApp = angular.module('myApp');

myApp.controller('MyController',  ['$scope', 'mainCharacter', function($scope, mainCharacter) {
  $scope.myFirstName ='John';
  $scope.myModel = 'Ready Player One';
  $scope.character = mainCharacter;
}]);
