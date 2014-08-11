var Newproperty = require('../models/submission.js')


var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	submission: function(req, res){
		// console.log('from index.js', req.body);

		var newProperty = new Newproperty({
		zipcode: req.body.zipcode,
		city: req.body.city, //not working
		buildingtype: req.body.buildingtype,
		yearbuilt: req.body.yearbuilt,
		sqft: req.body.sqft

	});
		//  mongoose knows where to save it too on the app.js page
	newProperty.save()

		// res.redirect('/mainpage')


	},
};



module.exports = indexController;