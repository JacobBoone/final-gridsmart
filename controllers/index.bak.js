var Newproperty = require('../models/submission.js')

var indexController = {
	index: function(req, res) {
		// res.render('index');
		Newproperty.findOne({userId:req.params.userId},function(err, doc) {
			res.render('index', {user: doc, userId:req.params.userId})
		})
	},

	bills: function(req, res) {
		Newproperty.findOne({userId:req.params.userId},function(err, doc) {
			res.render('bills', {user:doc, userId:req.params.userId})
		})
	},

	water: function(req, res) {
		Newproperty.findOne({userId:req.params.userId},function(err, doc) {
			res.render('waterbill', {user:doc, userId:req.params.userId})
		})
	},

	footprint: function(req, res) {
		Newproperty.findOne({userId:req.params.userId},function(err, doc) {
			res.render('footprint', {user:doc, userId:req.params.userId})
		})
	},
	waterfootprint: function(req, res) {
		Newproperty.findOne({userId:req.params.userId},function(err, doc) {
			res.render('waterfootprint', {user:doc, userId:req.params.userId})
		})
	},


	submission: function(req, res){
		// console.log('from index.js', req.body);

		var newProperty = new Newproperty({
		// name: req.body.name,
		userId:req.params.userId,
		houses:[{
			zipcode: req.body.zipcode,
			city: req.body.city,
			state: req.body.state,
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
				res.redirect(('/users/'+req.params.userId))
			}
		})
	// i want to this keep the user on the propery form page after it collects the data
	},

	elecBill: function(req, res) {
		console.log("submited!!1")
		console.log(req.body)
		Newproperty.findOne({userId:req.params.userId}, function(err,user){
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
				res.redirect(('/users/'+req.params.userId+ '/bills'))
			}
		})

		})
		
	},

	waterBill: function(req, res) {
		console.log("submited!!1")
		console.log(req.body)
		Newproperty.findOne({userId:req.params.userId}, function(err,user){
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
					res.redirect(('/users/'+req.params.userId+ '/waterbill'))
				}
			})

		})
		
	},

	removeelec: function(req, res) {
		// Pull the billId from the url
    	var targetBill = req.params.billId;
    	console.log(targetBill)
    	Newproperty.findOne({userId:req.params.userId}, function(err,user){
			// STEPS
			// 1.locate matching bill
			// 2.splice/ remove bill out of the array
			// involves
			
			// review - http://mongoosejs.com/docs/subdocs.html
			var findBill = user.houses[0].bills.electric.id(targetBill).remove(); 
				
			user.save(function(err,doc){
				if(err){
					console.log("ERROR!", err)
				}
				else{
					res.redirect('/users/'+req.params.userId+'/bills')
				}
			})
				// console.log("found it", findBill)
			
			})
				
	},








	removewater: function(req, res) {
		// Pull the billId from the url
    	var targetWaterBill = req.params.billId;
    	console.log(targetWaterBill)
    	Newproperty.findOne({userId:req.params.userId}, function(err,user){
			// STEPS
			// 1.locate matching bill
			// 2.splice/ remove bill out of the array
			// involves
			
			// review - http://mongoosejs.com/docs/subdocs.html
			var findBill = user.houses[0].bills.water.id(targetWaterBill).remove();
				
				user.save(function(err,doc){
					if(err){
						console.log("ERROR!", err)
					}
					else{
						res.redirect('/users/'+req.params.userId+'/waterbill')
					}
				})
				// console.log("found it", findBill)
			
			})
				
	},

// the following get the bills and sends the array of object to the ajax call,   
	findelecbills: function(req, res) {
		Newproperty.findOne({userId:req.params.userId}, function(err,user){
			console.log(user)
			var targetChartBills = user.houses[0].bills.electric;
   

    			console.log(targetChartBills)
    			res.send(targetChartBills)






		})
	},

	findwaterbills: function(req, res) {
		Newproperty.findOne({userId:req.params.userId}, function(err,user){
			console.log(user)
			var targetWaterChartBills = user.houses[0].bills.water;
    			console.log(targetWaterChartBills)
    			res.send(targetWaterChartBills)






		})
	},




};



module.exports = indexController;