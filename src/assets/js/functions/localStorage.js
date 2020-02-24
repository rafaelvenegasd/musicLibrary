import { addFavorites } from "./favorites";

// Function for save in localstorage
function display (e){
    $(e).click(function (event) {
        if($(event.target).hasClass('btn')){
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

export {display}