var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost/test')
var db = mongoose.connection;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

require('./routes.js')(app, express);//why does this work?



app.listen(3000, function() {
	console.log('app is listening on port 3000');
});

module.exports = app;