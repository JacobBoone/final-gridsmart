var mongoose =require('mongoose');

var Newproperty = mongoose.model('Newproperty',{
	name: String,
	houses:[{
		zipcode: String,
		buildingType: String,
		yearBuilt: String,
		sqft: String,
		bills:{
			electric:[{
				elStart: String,
				elEnd: String,
				elUsage: String,
				elCost: String
			}],
			water:[{
				waStart: String,
				waEnd: String,
				waUsage: String,
				waCost: String
			}],
		}
	}]


})









module.exports = Newproperty