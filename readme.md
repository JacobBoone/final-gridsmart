

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




Bill Date    Usage       Cost	
	
06/12/2014	765             $139.18	
05/13/2014	1042             $164.76	
04/11/2014	739             $121.91	
03/13/2014	2031             $240.65	
02/13/2014	2379             $272.63	
01/14/2014	2072            $244.42	
12/12/2013	1589            $200.03	
11/12/2013	943             $140.66	
10/15/2013	758             $108.35	
09/13/2013	1190             $145.03	
08/13/2013	1222       $147.75
07/13/2013	1277
