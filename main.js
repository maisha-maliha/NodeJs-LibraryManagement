const http =  require('http');
const fs = require('fs');
const data = fs.readFileSync("./FrontEnd/templates/index.html", "utf-8");

// DATA
const {book} = require('./database.js');
console.log(book)
//data.write(myval)
// SERVER
const server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write();
    res.end();
});

server.listen(3000);
//console.log(myval);
