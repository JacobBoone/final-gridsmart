var Newproperty = require('../models/submission.js')

var indexController = {
	index: function(req, res) {
		// res.render('index');
		Newproperty.findOne({},function(err, doc) {
			res.render('index', {user:doc})
		})
	},
	bills: function(req, res) {
		Newproperty.findOne({},function(err, doc) {
			res.render('bills', {user:doc})
		})
	},
	footprint: function(req, res) {
		Newproperty.findOne({},function(err, doc) {
			res.render('footprint', {user:doc})
		})
	},


	submission: function(req, res){
		// console.log('from index.js', req.body);

		var newProperty = new Newproperty({
		// name: req.body.name,
		houses:[{
			zipcode: req.body.zipcode,
			buildingType: req.body.buildingtype,
			yearBuilt: req.body.yearbuilt,
			sqft: req.body.sqft,
			}],

		});
		//  mongoose knows where to save it too on the app.js page
		newProperty.save(function(err,doc){
			if(err){
				console.log("ERROR!", err)
			}
			else{
				res.redirect('/')
			}
		})
	// i want to this keep the user on the propery form page after it collects the data
	},



	elecBill: function(req, res) {
		console.log("submited!!1")
		console.log(req.body)
		Newproperty.findOne({}, function(err,user){
			var elecBill = {
				elStart: req.body.elStart,
				elEnd: req.body.elEnd,
				elUsage: req.body.elUsage,
				elCost: req.body.elCost,
			};
			console.log('this bill', elecBill)
			user.houses[0].bills.electric.push(elecBill);
			// user.save();

			user.save(function(err,doc){
			if(err){
				console.log("ERROR!", err)
			}
			else{
				res.redirect('/bills')
			}
		})

		})
		
	}





};



module.exports = indexController;