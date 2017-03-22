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

app.listen(port);
