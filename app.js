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
app.get('/users/:userId', indexController.index);
app.get('/users/:userId/bills', indexController.bills);
app.get('/users/:userId/waterbill', indexController.water);
app.get('/users/:userId/footprint', indexController.footprint);

// removing bills
app.get('/users/:userId/bills/remove/:billId', indexController.removeelec);
app.get('/users/:userId/waterbill/remove/:billId', indexController.removewater);


// // // Submit entry is the submitted form when accessed as a POST
app.post('/users/:userId/propertySubmission', indexController.submission);

app.post('/users/:userId/elecBillSubmission', indexController.elecBill);

app.post('/users/:userId/waterBillSubmission', indexController.waterBill);

var server = app.listen(5365, function() {
	console.log('Express server listening on port ' + server.address().port);
});
