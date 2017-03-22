const express = require('express');
const app = express();

app.use(function(req, res, next){
	console.log(req.path);
	next();
});

app.get('/', function(req, res){
	res.send('HELLO WORLD!');
});

app.listen('8080');
