//** This file contain the main functions */

// Function for clean everything
function clean(element){
    element.empty();
}

// Convert data in minutes
function convertMinutes(val){
    return Math.floor(val/60000);
}

//Get the country selected in the input
function selectedCountry(params) {
    return ($("#country option:selected").attr('id'));
}


export {clean, convertMinutes, selectedCountry}