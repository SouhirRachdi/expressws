const express = require('express');
const app = express();
const port =3000;
const myLogger = require ("./middelware/checkTime");


app.use(express.static(__dirname + "/public"))

app.set('view engine', 'pug');
app.set('views','./views');

app.use(myLogger);

app.get('/', function(req, res){
    res.render('content', {name:"SHA"});
});

app.get('/about', function(req, res){
    res.render('ourService');
});
app.get('/join', function(req, res){
    res.render('contactUs');
});

app.listen(port, function(){
   console.log("Lostening to the server on http://localhost:3000")});
