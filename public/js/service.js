angular.module('myApp')
.service('BookService', [ function() {
  var books = [
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

  return {
    books: books,
    getBooks: function() {return books;},
    getBook: function(index) { return books[index]; },
    addBook: function(book) {
      var newBook = { title: book.title, author: book.author };
      books.push(newBook);
    }
  };
}]);