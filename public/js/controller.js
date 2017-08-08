/*jshint esversion: 6*/
var myApp = angular.module('myApp');

myApp.controller('MyController', ['$scope', function($scope) {
  $scope.myFirstName ='John';
  $scope.myModel = 'Ready Player One';
}]);
