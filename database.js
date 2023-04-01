// DATABASE
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'maisha30',
  database : 'store_book'
});
connection.connect();
var booksname = '<ul>';
connection.query('SELECT book_name FROM books;', function (error, results, fields) {
  if (error) throw error;
  results.forEach(element => {
    booksname += '<li>'+ element.book_name + '</li>';
  });
  booksname += '</ul>'
  //console.log(booksname);
});
// the following code will not show the booksname result
// becuase it is outside the connection.query() function
// module.exports = { myval : booksname};
// console.log(booksname); // this shows <ul>
console.log(booksname);
module.exports = {book : booksname};
//module.exports = {book : booksname};
connection.end();