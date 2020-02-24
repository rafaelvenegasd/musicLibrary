import "./assets/css/main.scss";

import {clean,convertMinutes, selectedCountry} from "./assets/js/functions/functions"
import {addFavorites} from "./assets/js/functions/favorites"
import {countries} from "./assets/js/functions/countries"
import {display} from "./assets/js/functions/localStorage"
import onload from "./assets/js/onload"
import "./assets/js/switch"

onload();
display("#display");

//add options in the selector of limit
for (let i = 1; i <= 200; i++) {
    $("#limit").append("<option value='"+i+"'>"+i+"</option>");   
}

// Get the country selected
$(document).on('change', '#country', function (callback) {
    selectedCountry();
})



