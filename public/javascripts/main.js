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
});