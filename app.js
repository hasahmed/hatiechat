var express = require('express');
var app = new express();
var http = require('http');
var path = require("path");
var server = http.Server(app);
var bodyParser = require('body-parser');

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

/*
app.use(function(request, response) {
     response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Looks like you didn't find a static file.");
       //something to test a git thing
});
*/
app.use(function(req, res, next){
    res.sendFile(path.resolve(publicPath, "taco.html"));
//    next();
});

app.use(function(req, res){
    res.end(`You are invited to the super secrete club of awesome!\n\
The password is lettuce`);
});

app.get('/', function(req, res){
    res.render("index", {
        message: "La Ilaha il Allah"
    });
});

app.post('/index.html', function(req, res){
    console.log(req);
    res.send('<p> something </p>');
});

server.listen(32908, function(){
    console.log('listening on *:32908');
});
