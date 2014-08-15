$(document).ready(function() {                                  // from zipLookup (https://code.google.com/p/ziplookup/) When the document loads,
    
    $('.location-entry[name=zipcode]').on('input',function(){                        // Set on blur
        var zipcode = $(this).val();
        if (zipcode.length >=5){
        $.zipLookup(                                            // Do a Zip code Lookup
            $(this).val(),                                      // Zip code Field Value
            function(cityName, stateName, stateShortName){      // If Successful,
                console.log("here")
                // $('.zip-info').html(cityName + ', ' + stateShortName);            // Add a message with the city/state
                $(".city-entry[name=city]").val(cityName);
                $(".state-entry[name=state]").val(stateShortName);
           

            },
            function(errMsg){                                   // If Zip couldn't be found,
                $('.zip-info').html("Error: " + errMsg);         // Add an error message
            });
        }

    });

  
// manually input chart


// new Morris.Line({
//   // ID of the element in which to draw the chart.
//   element: 'newchart',
//   // Chart data records -- each entry in this array corresponds to a point on
//   // the chart.
//   data: [
//     { year: '2008', value: 20 },
//     { year: '2009', value: 10 },
//     { year: '2010', value: 5 },
//     { year: '2011', value: 5 },
//     { year: '2012', value: 20 }
//   ],
//   // The name of the data record attribute that contains x-values.
//   xkey: 'year',
//   // A list of names of data record attributes that contain y-values.
//   ykeys: ['value'],
//   // Labels for the ykeys -- will be displayed when you hover over the
//   // chart.
//   labels: ['Value']
// });

// MY START AT A CHART ---------------------------------
// console.log("hello", window.location.href.split('/'))
// console.log("newhello")

    $.get('forelecchart', function(whatever){
       
        var dataSet = [];
        var years = _.groupBy(whatever, function(item){
            return +item.elEnd.split("-")[0]
        });
        // console.log(years)
        var keys=_.keys(years)
        // console.log(keys)
        for (var i = 0; i < 12; i++) {
            var dataItem = {
                month:(i+1)
            };
            for(var year in years){
                var dataPoint = _.find(years[year], function(item){
                    return +item.elEnd.split("-")[1]===i+1
                })
                if (dataPoint){
                    dataItem[year]=dataPoint.elUsage;
                }
                else{
                    dataItem[year]=null
                }

            }
            dataSet.push(dataItem)   
        };
        console.log(dataSet)


// my attempts at looping thru date info...
        // console.log(whatever, 'whatever')
        // var myData = whatever
        // console.log(myData,'my data')
        // console.log(myData.elEnd,'my end data')

        // for (var i = 0; i < myData.length; i++) {
        //     // console.log(whatever, 'hi')
        //     // console.log(myData[i].elEnd, "my loop data")
        //     if (myData[i].elEnd >= "2014-01-01" && myData[i].elEnd <= "2014-12-31"){

        //         var thisYear = myData[i]
        //         // console.log(myData[i].elEnd, "my loop data")
        //         // console.log(myData[i], "my loop data")
        //         console.log(thisYear, 'thisYear')
        //         // return thisYear
        //         // var thisYear = myData[i].map(function(data){
        //             // console.log(thisYear, 'thisYear')

        //     }
        // }
        
       // var elChartData = thisYear.map(function(data) {

       //   return {endDate: data.elEnd, usage:data.elUsage, cost:data.elCost }
       //  }) 
        // var elChartData = whatever.map(function(data) {

        //  return {endDate: data.elEnd, usage:data.elUsage, cost:data.elCost }
        // })
       // console.log('elecformat',elChartData)
        new Morris.Line({
          // ID of the element in which to draw the chart.
          element: 'electricchart',
          // Chart data records -- each entry in this array corresponds to a point on
          // the chart.
          data: dataSet,


          // The name of the data record attribute that contains x-values.
          xkey: 'month',
          // A list of names of data record attributes that contain y-values.
          ykeys: keys,
          // Labels for the ykeys -- will be displayed when you hover over the
          // chart.
          labels: ['kWh', '$'],
          xlabels:["month"],
          continuousLine:false,
          hoverCallback:function(index, options,content,row){
            var output =""
            for (var key in keys){
                key = keys[key]
                if (row[key]!==null){
                    output += key +' kWh: ' +row[key] + "<br>"
                }
            }
            return output
            // return row.endDate + "<br>" + "$" + row.cost + "<br>" + "kWh: " + row.usage;
          }

        });
    });



// this is continuous charted info...................

    $.get('forwaterchart', function(whatever){
        // console.log(whatever)
       var waChartData = whatever.map(function(data) {
         return {startDate: data.waStart, endDate: data.waEnd, usage:data.waUsage, cost:data.waCost }
        })
       // console.log('waterformat',waChartData)
        new Morris.Line({
          // ID of the element in which to draw the chart.
          element: 'waterchart',
          // Chart data records -- each entry in this array corresponds to a point on
          // the chart.
          data: waChartData,

          // The name of the data record attribute that contains x-values.
          xkey: 'endDate',
          // A list of names of data record attributes that contain y-values.
          ykeys: ['usage'],
          // Labels for the ykeys -- will be displayed when you hover over the
          // chart.
          labels: ['gallons', '$'],
          xlabels:["month"],
          continuousLine:['true'],
          hoverCallback:function(index, options,content,row){
            return row.endDate + "<br>" + "$" + row.cost + "<br>" + "gallons: " + row.usage;
            }


        });
    });



});