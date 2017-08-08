angular.module('myApp')
.service('BookService', [ function() {
  this.books = [
    {
      title : 'Rebecca',
      author : "Daphne du Maurier"
    },
    {
      title : "Gone with the Wind",
      author : "Margaret Mitchell"
    },
    {
      title: "The Bible",
      author: "Jesus"
    }
  ];
  this.getBooks = function() {return this.books;};
  this.getBook = function(index) { return this.books[index]; };
}]);