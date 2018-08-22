var express = require('express');
var path = require('path');
var http = require('http');

var app = express();

app.set("views",path.resolve(__dirname,"views"));
app.set("view engine", "ejs");



var publicPath = path.join(__dirname,'views');
app.use('recursos',express.static(publicPath));

app.get('/',(request,response)=>{
    response.render("menu");
});

app.get('/clases',(request,response)=>{
    response.end('');
});

app.get('/armas',(request,response)=>{
    response.end('');
});

app.get('/victimas',(request,response)=>{
   response.end(''); 
});

app.use((request,response)=>{
    response.writeHead(404,{"content-type":"text/html"});
    response.end("<h2>404 Not Found!</h2>");
});

http.createServer(app).listen(3000);