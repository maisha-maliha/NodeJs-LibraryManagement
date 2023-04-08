const fs = require('fs');
// DATABASE
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'maisha30',
  database : 'store_book'
});
connection.connect();

// ================= SQL QUERY ====================
let booksname = 'let x = [';
connection.query('SELECT * FROM books;', function (error, results, fields) {
  if (error) throw error;
  results.forEach(element => {
    booksname += '{ bookname : "'+element.book_name+'",'+'catagory: "'+element.catagory+'", '+'price: "'+element.price+'",'+'quantity: "'+element.quantity+'"},';
  });
  booksname += ']; export {x};';
  fs.writeFile('./FrontEnd/script/booklist.js',booksname, err =>{if(err) console.log(err)});
});
// the following code will not show the booksname result
// becuase it is outside the connection.query() function
// module.exports = { myval : booksname};
// console.log(booksname); // this shows <ul>
//module.exports = {book : booksname};
//module.exports = {book : booksname};
connection.end();