

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




Bill Date    Usage   Cost	
	
06/12/2014	765      106.15
05/13/2014	1042     141.13
04/11/2014	739      102.37
03/13/2014	2031     267.84
02/13/2014	2379     312.94 
01/14/2014	2072     272.62
12/12/2013	1589     214.37
11/12/2013	943      131.55
10/15/2013	758      103.36
09/13/2013	1190     152.76 
08/13/2013	1222     156.74
07/13/2013	1277




2400 = $105  
105/2400=.04375(rate)

usage*rate=cost

waterDate    Usage   Cost	
	
1/14- 3/14		2000     87.50
4/14- 6/14		2400     105.00
7/14- 9/14		2300     100.62
10/14- 12/14	2500     109.37

