var mongoose =require('mongoose');

var Newelecbill = mongoose.model('Newelecbill',{
	elStart: String,
	elEnd: String,
	elUsage: String,
	elCost: String
})


var Newproperty = mongoose.model('Newproperty',{
	name: String,
	houses:[{
		zipcode: String,
		buildingType: String,
		yearBuilt: String,
		sqft: String,
		bills:{
			electric:[Newelecbill],
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