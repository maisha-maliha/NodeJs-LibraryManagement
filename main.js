const http =  require('http');
const fs = require('fs');

const data = fs.readFileSync("./FrontEnd/templates/index.html", "utf-8");

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'maisha',
  password : 'maisha30',
  database : 'store_book'
});
connection.connect();
// SERVER
const server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    connection.query('SELECT book_name FROM books', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0]);
      });
    res.end();
});
 
 
connection.end();

server.listen(3000);
console.log("it works");