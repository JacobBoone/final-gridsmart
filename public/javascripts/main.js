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
                // $('input[name=city]').val(cityName);            // Add a message with the city/state

            },
            function(errMsg){                                   // If Zip couldn't be found,
                $('.zip-info').html("Error: " + errMsg);         // Add an error message
            });
        }

    });

    // $('.my-zip[name=zipcode]').on('input',function(){                        // Set on blur
    //     var zipcode = $(this).val();
    //     if (zipcode.length >=5){
    //     $.zipLookup(                                            // Do a Zip code Lookup
    //         $(this).val(),                                      // Zip code Field Value
    //         function(cityName, stateName, stateShortName){      // If Successful,
    //             console.log("here")
    //             $('.zip-info').html(cityName + ', ' + stateShortName);            // Add a message with the city/state
    //             // $('input[name=city]').val(cityName);            // Add a message with the city/state

    //         },
    //         function(errMsg){                                   // If Zip couldn't be found,
    //             $('.zip-info').html("Error: " + errMsg);         // Add an error message
    //         });
    //     }

    // });


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
        console.log(whatever)
       var elChartData = whatever.map(function(data) {
         return {endDate: data.elEnd, usage:data.elUsage, cost:data.elCost }
        })
       console.log('chartformat',elChartData)
        new Morris.Line({
          // ID of the element in which to draw the chart.
          element: 'electricchart',
          // Chart data records -- each entry in this array corresponds to a point on
          // the chart.
          data: elChartData,

          // The name of the data record attribute that contains x-values.
          xkey: 'endDate',
          // A list of names of data record attributes that contain y-values.
          ykeys: ['usage', 'cost'],
          // Labels for the ykeys -- will be displayed when you hover over the
          // chart.
          labels: ['kWh', '$'],
          xlabels:["month"],
          continuousLine:['true']
        });
    })



    // $('.submit-button').click(function(){

    //     console.log("Submit click")

    // });
// // delete individual bills
//     $('#elDelete').click(function(){
//                 console.log('delete me')
//                 $(this).closest('.elec-row').remove()
//         })




    // // Grab the template source from the html script-tag
    // var elTemplateSource = $('#elec-template').html();
    // console.log('Template Source:', elTemplateSource);

    // // Compile a handlebars template
    // var elTemplate = Handlebars.compile(elTemplateSource);
    // // Handlebars.compile takes in a string of HTML
    // // and gives back a function
    // console.log('MyTemplate:', elTemplate);


// electric bill click handler
 //    $('.save-elecBill').click(function(){
        

 //        var start = $('.elStart-entry').val()
 //        var end = $('.elEnd-entry').val()
 //        var usage = $('.elUsage-entry').val()
 //        var cost = $('.elCost-entry').val()

 //        // var electricBill = new UtilityBill(start, end, usage, cost)
 //        // Dataset for HB

 //        var elecBill = {
 //            start: start,
 //            end: end,
 //            usage:usage,
 //            cost: cost
 //        };

 //        $('#elecModal').modal('hide')

 //        $('.elStart-entry').val('')
 //        $('.elEnd-entry').val('')
 //        $('.elUsage-entry').val('')
 //        $('.elCost-entry').val('')

 //        $('#elec-table').append(elTemplate(elecBill))
 // // is only deleting the first row........
 //        $('#elDelete').click(function(){
 //            console.log('delete me')
 //            $(this).closest('.elec-row').remove()
 //    })

 //        // console.log("Submit Electric Bill")
 //        console.log(elecBill)
 //    })



    // // Grab the template source from the html script-tag
    // var waTemplateSource = $('#water-template').html();
    // console.log('Template Source:', waTemplateSource);

    // // Compile a handlebars template
    // var waTemplate = Handlebars.compile(waTemplateSource);
    // // Handlebars.compile takes in a string of HTML
    // // and gives back a function
    // console.log('MyTemplate:', waTemplate);



// water bill click handler
    // $('.save-waterBill').click(function(){
    //     var start = $('.waStart-entry').val()
    //     var end = $('.waEnd-entry').val()
    //     var usage = $('.waUsage-entry').val()
    //     var cost = $('.waCost-entry').val()

    //     var waterBill = {
    //         start: start,
    //         end: end,
    //         usage:usage,
    //         cost: cost
    //     };

    //     $('#waterModal').modal('hide')

    //     $('.waStart-entry').val('')
    //     $('.waEnd-entry').val('')
    //     $('.waUsage-entry').val('')
    //     $('.waCost-entry').val('')

    //     $('#water-table').append(waTemplate(waterBill))

    //     // console.log("Submit Water Bill")
    //     console.log(waterBill)
    // })

});