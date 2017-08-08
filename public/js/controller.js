/*jshint esversion: 6*/
var myApp = angular.module('myApp');

myApp.controller('MyController',  ['$scope', 'CharacterVersionFactory', 'mainCharacter', 'BookService',
  function($scope, CharacterVersionFactory, mainCharacter, BookService) {
  $scope.myFirstName ='John';
  $scope.myModel = 'Ready Player One';
  $scope.character = mainCharacter;
  $scope.cvfResult = CharacterVersionFactory.genCharVersion();
  $scope.newBook = { title: '', author: ''};
  $scope.BookService = BookService;
  $scope.addBook = function() {
    BookService.addBook($scope.newBook);
    $scope.newBook.title = '';
    $scope.newBook.author = '';
  };
}]);
