//const mysql = require('mysql');
const http =  require('http');

const server = http.createServer((req, res)=>{
    res.write("hello maisha ");
    if(req.url == '/'){
        res.write("you are in home page " + req.url);
        res.end();
    }
    if(req.url == '/books'){
        res.write("you are in boooks");
        res.end();
    }
});

server.listen(3000);
console.log("i can see you");