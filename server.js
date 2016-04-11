
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/javascript.html'));
});
app.get('/swagger', function(req, res) {
    res.redirect('https://swagger.cloudboost.io')
});

app.set('port', process.env.PORT || 1445);
var server = app.listen(app.get('port'), function() {
	console.log("API Reference started on PORT:"+app.get('port'));
});
