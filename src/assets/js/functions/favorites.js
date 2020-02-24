import { clean } from "./functions";
// Function for favorites
function addFavorites(){
    // read the favorites from localStorage
    clean($("#favorites"));
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

export {addFavorites}