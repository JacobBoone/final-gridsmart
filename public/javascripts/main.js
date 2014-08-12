var elecLightbox = $('<div>Content</div>')

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

   


    $('.submit-button').on('click',function(){
        // this default prevention, will prohibit the click to try to go to the new page set in the action "/propertySubmission" but will also not complete the variable submit to the DB
        // e.preventDefault(); 

        
        // // need to capture values on the front end AGAIN
        // var zip = $('.location-entry').val()
        // var building = $('.building-entry').val()
        // var year = $('.year-entry').val()
        // var sqft= $('.area-entry').val()
        // $.get('/propertySubmission',
        //     {
        //     zip: zip,
        //     building: building,
        //     year: year,
        //     sqft:sqft
        // }, 
        //     function(){

        //     })
        
        // // $('.checkmark').after('✔')

        console.log("Submit click")

    });
// declare some variables to construct the light box on click

    $('.elecAddBill').click(function(){
        // $('.elecLightbox').animate({'opacity':'.50'}, 300, 'linear');
                    // $('.box').animate({'opacity':'1.00'}, 300, 'linear');
                    // $('.backdrop, .box').css('display', 'block');

    })


});