const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(function(req, res, next){
	console.log(req.path);
	next();
});

app.get('/', function(req, res){
	res.send('HELLO WORLD!');
});

app.get('/favicon.ico', function(req, res){
	res.sendFile(__dirname + '/favicon.ico');
});

app.listen(port);
