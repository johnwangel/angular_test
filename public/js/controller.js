/*jshint esversion: 6*/
var myApp = angular.module('myApp');

myApp.controller('MyController',  ['$scope', 'CharacterVersionFactory', 'mainCharacter',
  function($scope, CharacterVersionFactory, mainCharacter) {
  $scope.myFirstName ='John';
  $scope.myModel = 'Ready Player One';
  $scope.character = mainCharacter;
  $scope.cvfResult = CharacterVersionFactory;
}]);
