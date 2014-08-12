var Newproperty = require('../models/submission.js')


var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	submission: function(req, res){
		// console.log('from index.js', req.body);

		var newProperty = new Newproperty({
		name: req.body.name,
		houses:[{
			zipcode: req.body.zipcode,
			buildingType: req.body.buildingtype,
			yearBuilt: req.body.yearbuilt,
			sqft: req.body.sqft,
			bills:{
				electric:[{
					elStart: req.body.elStart,
					elEnd: req.body.elEnd,
					elUsage: req.body.elUsage,
					elCost: req.body.elCost,
				}],
				water:[{
					waStart: req.body.waStart,
					waEnd: req.body.waEnd,
					waUsage: req.body.waUsage,
					waCost: req.body.waCost,
				}],

			}
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

	// 	elecBillSubmission: function(req, res) {
		
	// 	var newElecBill = new Newelecbill({
	// 				elStart: req.body.elStart,
	// 				elEnd: req.body.elEnd,
	// 				elUsage: req.body.elUsage,
	// 				elCost: req.body.elCost,
	// 	})

	// 	newProperty
	// },





};



module.exports = indexController;