import Album from "./assets/classes/album";
import Artist from "./assets/classes/artist";
import Search from "./assets/classes/search";
import Song from "./assets/classes/song";
import MusicVideo from "./assets/classes/video";
import "./assets/css/main.scss";

import {clean, display, addFavorites, convertMinutes, countries, options, countrySelected, selectedCountry} from "./assets/js/functions"
import onload from "./assets/js/onload"
import "./assets/js/search"

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



