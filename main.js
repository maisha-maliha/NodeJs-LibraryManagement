const http =  require('http');
const fs = require('fs');
const path = require('path');

const data = fs.readFileSync("./FrontEnd/templates/index.html", "utf-8");

// DATA
const {book} = require('./database.js');
//data.write(myval)
// SERVER
const server = http.createServer((req, res)=>{
    //console.log(req.url);
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
    }
    if(req.url == '/script/script.js'){
        let filePath = path.join(__dirname,"FrontEnd", req.url);
        fs.readFile(filePath, (err, content) =>{
            if (err) console.log(err);
            else {
                res.writeHead(200, {'Content-Type': 'text/javascript'});
                let data = content.toString();
                console.log(data);
            }
        });
        //const readStream = fs.createReadStream(filePath, "utf-8");
        //readStream.pipe(res);
    }
    if(req.url == '/styles/style.css'){
        let filePath = path.join(__dirname,"FrontEnd", req.url);
        fs.readFile(filePath, (err, content) =>{
            if (err) console.log(err);
            else {
                res.writeHead(200, {'Content-Type': 'text/css'});
                //console.log(filePath);
                let data = content.toString();
                console.log(data);
                res.end(data);
            }
        });
        //const readStream = fs.createReadStream(filePath, "utf-8");
        //readStream.pipe(res);
    }
    res.end();
});

server.listen(3000);
//console.log(myval);
