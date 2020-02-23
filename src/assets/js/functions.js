//** This file contain the main functions */

// Function for clean everything
function clean(element){
    element.empty();
}

// Function for save in localstorage
function display (e){
    $(e).click(function (event) {
        if($(event.target).hasClass('btn')){
            console.log($(event.target).attr('id'));
            const IDthis = $(event.target).attr('id');
            const IDSelected = document.getElementById('name'+IDthis).textContent; 
            // read the favorites from localStorage
            var favorites = localStorage.getItem("favorites") || "[]";
            favorites = JSON.parse(favorites);
            // Look for the favorites
            const position = favorites.findIndex(function(e) {
                return e == IDSelected; });
            if (position != -1) {
                favorites.splice(position, 1); // if the element exist, remove the element
            } else {
                favorites.push(IDSelected); // else add to Favorites
            }
            localStorage.setItem("favorites", JSON.stringify(favorites)); // Save the list of favorites 
            addFavorites();
        }
    })
} 

// Function for favorites
function addFavorites(){
    // read the favorites from localStorage
    clean($("#favorites"));
    console.log("Hello favorites");
    var tittle = document.createElement("h4");
    tittle.textContent = "Favorites";
    var favorites = localStorage.getItem("favorites") || "[]";
    favorites = JSON.parse(favorites);
    var ul = document.createElement("ul");
    // Creatings the elements li
    for (var i = 0; i < favorites.length; i++) {
        var li = document.createElement("li");
        li.textContent = favorites[i];
        ul.append(li);
    }
    $("#favorites").append(tittle);
    $("#favorites").append(ul);
}

// Convert data in minutes
function convertMinutes(val){
    return Math.floor(val/60000);
}

// Get the list of countries
const countries = $.ajax({
    url: "https://www.liferay.com/api/jsonws/country/get-countries/",
    dataType:"json",
    type:"GET",
    success: function(response){
        $.each(response, function (params) {
            $("#country").append(
            '<option id="'+ response[params].a2 + '">' + response[params].a2 + ' - ' + response[params].name  + '</option>'
            );
        })
    }
}).fail(function(error){
    console.log(error);
});

function selectedCountry(params) {
    return ($("#country option:selected").attr('id'));
}


export {clean, display, addFavorites, convertMinutes, countries, selectedCountry}