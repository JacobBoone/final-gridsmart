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

	water: function(req, res) {
		Newproperty.findOne({},function(err, doc) {
			res.render('waterbill', {user:doc})
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
		
	},

	waterBill: function(req, res) {
		console.log("submited!!1")
		console.log(req.body)
		Newproperty.findOne({}, function(err,user){
			var waterBill = {
				waStart: req.body.waStart,
				waEnd: req.body.waEnd,
				waUsage: req.body.waUsage,
				waCost: req.body.waCost,
			};
			console.log('this bill', waterBill)
			user.houses[0].bills.water.push(waterBill);
			// user.save();

			user.save(function(err,doc){
			if(err){
				console.log("ERROR!", err)
			}
			else{
				res.redirect('/waterbill')
			}
		})

		})
		
	},

	removeelec: function(req, res) {
		// Pull the billId from the url
    	var targetBill = req.params.billId;
    	console.log(targetBill)
    	Newproperty.findOne({}, function(err,user){
			// STEPS
			// 1.locate matching bill
			// 2.splice/ remove bill out of the array
			// involves
			
			// review - http://mongoosejs.com/docs/subdocs.html
			var findBill = user.houses[0].bills.electric.id(targetBill).remove() 
				
				user.save(function(err,doc){
					if(err){
						console.log("ERROR!", err)
					}
					else{
						res.redirect('/bills')
					}
				})
				// console.log("found it", findBill)
			
			})
				
	}



};



module.exports = indexController;