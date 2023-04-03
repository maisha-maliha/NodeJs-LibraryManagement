const http =  require('http');
const fs = require('fs');
//const path = require('path');

// DATA
const {book} = require('./database.js');
//data.write(myval)
// SERVER
const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        let data = fs.readFileSync("./FrontEnd/templates/index.html", "utf-8");
        res.write(data);
    }
    if(req.url == '/script/script.js'){
        res.writeHead(200,{'Content-Type':'text/javascript'});
        let data = fs.readFileSync("./FrontEnd/script/script.js", "utf-8");
        res.end(data);
    }
    if(req.url == '/styles/style.css'){
        res.writeHead(200,{'Content-Type':'text/css'});
        let data = fs.readFileSync("./FrontEnd/styles/style.css", "utf-8");
        res.end(data);
    }
    if(req.url == '/script/booklist.js'){
        res.writeHead(200,{'Content-Type':'text/javascript'});
        let data = fs.readFileSync("./FrontEnd/script/booklist.js", "utf-8");
        res.end(data);
    }
    res.end();
}).listen(3000);

