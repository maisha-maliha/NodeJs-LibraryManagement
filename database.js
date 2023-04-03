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

var booksname = 'let x = "<section><tr><th>NAME</th><th>CATAGORY</th><th>PRICE</th><th>QUANTITY</th></tr>';

connection.query('SELECT * FROM books;', function (error, results, fields) {
  if (error) throw error;
  results.forEach(element => {
    booksname += '<tr>'+ '<td>'+element.book_name+'</td>'+'<td>'+element.catagory+'</td>'+'<td>'+element.price+'</td>'+'<td>'+element.quantity+'</td>'+ '</tr>';
  });
  booksname += '</section>"; export {x};';
  fs.writeFile('./FrontEnd/script/booklist.js',booksname, err =>{if(err) console.log(err)});
  //console.log(booksname);
});
// the following code will not show the booksname result
// becuase it is outside the connection.query() function
// module.exports = { myval : booksname};
// console.log(booksname); // this shows <ul>
//module.exports = {book : booksname};
//module.exports = {book : booksname};
connection.end();