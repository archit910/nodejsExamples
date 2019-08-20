var express = require('express');
var app = express();
var router = require('./routes/index')
var port = 3000;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) {

	res.render('index');
	
});
app.use('/first', router);

app.listen(port);