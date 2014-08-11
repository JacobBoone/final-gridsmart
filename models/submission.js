var mongoose =require('mongoose');

var Newproperty = mongoose.model('Newproperty',{
	zipcode: String,
	city: String,
	buildingtype: String,
	yearbuilt: String,
	sqft: String

})






module.exports = Newproperty