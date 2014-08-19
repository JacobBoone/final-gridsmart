var mongoose =require('mongoose');

var Newproperty = mongoose.model('Newproperty',{
	userId: Number,
	name: String,
	houses:[{
		zipcode: String,
		city: String,
		state: String,
		buildingType: String,
		yearBuilt: String,
		sqft: String,
		bills:{
			electric:[{
				elStart: String,
				elEnd: String,
				elUsage: String,
				elCost: String,
				elEvent: String
			}],
			water:[{
				waStart: String,
				waEnd: String,
				waUsage: String,
				waCost: String,
				waEvent: String,
			}],
		}
	}]


})









module.exports = Newproperty