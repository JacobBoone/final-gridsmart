var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var passport = require('passport');
var passportConfig = require('./config/passport');
var authenticationController = require('./controllers/authentication');


var indexController = require('./controllers/index.js');

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/gridsmart')


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(flash());
app.use(session({secret: 'secret'}));
app.use(passport.initialize());
app.use(passport.session());

// Our get request for viewing the login page
app.get('/auth/login', authenticationController.login);

// Post received from submitting the login form
app.post('/auth/login', authenticationController.processLogin);

// Post received from submitting the signup form
app.post('/auth/signup', authenticationController.processSignup);

// Any requests to log out can be handled at this url
app.get('/auth/logout', authenticationController.logout);

// ***** IMPORTANT ***** //
// By including this middleware (defined in our config/passport.js module.exports),
// We can prevent unauthorized access to any route handler defined after this call
// to .use()
app.use(passportConfig.ensureAuthenticated);

app.get('/', indexController.index);
app.get('/bills', indexController.bills);
app.get('/waterbill', indexController.water);
app.get('/footprint', indexController.footprint);
app.get('/waterfootprint', indexController.waterfootprint);

// gets info from DB for Charts
app.get('/forelecchart', indexController.findelecbills);
app.get('/forwaterchart', indexController.findwaterbills);

// removing bills
app.get('/bills/remove/:billId', indexController.removeelec);
app.get('/waterbill/remove/:billId', indexController.removewater);


// // // Submit entry is the submitted form when accessed as a POST
app.post('/propertySubmission', indexController.submission);

app.post('/elecBillSubmission', indexController.elecBill);

app.post('/waterBillSubmission', indexController.waterBill);

/*app.get('/users/:userId', indexController.index);
app.get('/users/:userId/bills', indexController.bills);
app.get('/users/:userId/waterbill', indexController.water);
app.get('/users/:userId/footprint', indexController.footprint);
app.get('/users/:userId/waterfootprint', indexController.waterfootprint);

// gets info from DB for Charts
app.get('/users/:userId/forelecchart', indexController.findelecbills);
app.get('/users/:userId/forwaterchart', indexController.findwaterbills);

// removing bills
app.get('/users/:userId/bills/remove/:billId', indexController.removeelec);
app.get('/users/:userId/waterbill/remove/:billId', indexController.removewater);


// // // Submit entry is the submitted form when accessed as a POST
app.post('/users/:userId/propertySubmission', indexController.submission);

app.post('/users/:userId/elecBillSubmission', indexController.elecBill);

app.post('/users/:userId/waterBillSubmission', indexController.waterBill);*/

var server = app.listen(5365, function() {
	console.log('Express server listening on port ' + server.address().port);
});
