$(document).ready(function() {                                  // from zipLookup (https://code.google.com/p/ziplookup/) When the document loads,
    $('.location-entry[name=zipcode]').blur(function(){                        // Set on blur
        $.zipLookup(                                            // Do a Zip code Lookup
            $(this).val(),                                      // Zip code Field Value
            function(cityName, stateName, stateShortName){      // If Successful,

                $('.zip-info').html(cityName + ', ' + stateShortName);            // Add a message with the city/state

            },
            function(errMsg){                                   // If Zip couldn't be found,
                $('.zip-info').html("Error: " + errMsg);         // Add an error message
            });
    });

   


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