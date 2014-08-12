

<!-- Architecture of DB  -->
{
	name: "Username",
	houses: [{
		zip: 21074,
		type: residential,
		year: 1975,
		sqft: 1180,
		<!-- object of array of bill objects -->
		bills: {
			electric:[
			{
				start: date, 
				end: date,
				usage: 1210,
				cost: $180.00
			},
			electric:
			{
				start: date, 
				end: date,
				usage: 1530,
				cost: $200.00
			},
			electric:{etc.}

		],
			water[
			{
				start: date, 
				end: date,
				usage: 3040,
				cost: $49.00
			},			
			water
			{
				start: date, 
				end: date,
				usage: 3510,
				cost: $60.00
			},			
			water{etc}
		]

		}
	}]
}




<!-- SCHEMA FOR DATA -->

var Newproperty = mongoose.model('Newproperty',{
	name: String,
	houses:[{
		zipcode: String,
		buildingtype: String,
		yearbuilt: String,
		sqft: String,
		bills:{
			electric:[{
				start: String,
				end: String,
				usage: String,
				cost: String
			}],
			water:[{
				start: String,
				end: String,
				usage: String,
				cost: String
			}],
		}
	}]


})
