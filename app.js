var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/gridsmart')


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', indexController.index);
app.get('/bills', indexController.bills)
app.get('/footprint', indexController.footprint)




// // // Submit entry is the submitted form when accessed as a POST
app.post('/propertySubmission', indexController.submission);

app.post('/elecBillSubmission', indexController.elecBill);



var server = app.listen(5365, function() {
	console.log('Express server listening on port ' + server.address().port);
});
