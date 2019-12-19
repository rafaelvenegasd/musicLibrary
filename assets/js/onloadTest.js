// ** This file contain the functions for load content by default when the page is ready */
$("document").ready(function(){
    addFavorites();
    clean($("#display"));
    var datos = $.ajax(
        {
        type: "GET",
        dataType: "jsonp",
        url : "https://itunes.apple.com/search?term=Foster+the+People&country=us&limit=20" 
    })

    .done(function() {
        for (var data of datos.responseJSON['results']) {
            // New Object Song
            var itemSong = new Song(data['trackId'], data['trackName'], data['artworkUrl100'], data['artistName'], data['collectionName'], data['trackPrice'], data['trackTimeMillis'], data['releaseDate'], data['primaryGenreName'], data['previewUrl'], data['trackViewUrl']);
            $("#display").append(
                `<div class="card">
                    <div class="card-body">
                        <h4 class="card-title" id="name${itemSong.id}"> ${itemSong.songName} </h4>
                        <button class="btn" id="${itemSong.id}">⭐</button>
                        <img src="${itemSong.caratula}"></img>
                        <p>Artist: ${itemSong.artistName}</p>
                        <p>Album: ${itemSong.albumName}</p>
                        <p>Price: ${itemSong.price}</p>
                        <p>Lenght: ${itemSong.lenght}</p>
                        <p>Creation date: ${itemSong.creationDate}</p>
                        <p>Genre: ${itemSong.musicGenre}</p>
                        <audio type="audio/m4a" id="${itemSong.id}" src="${itemSong.audio}" controls></audio>
                    </div>
                </div>`)
        }
    })
    .fail(function() {
    console.log("error");
    });
})

// Function for clean everything
function clean(element){
    element.empty();
}

    // Function for save in localstorage
    $("#display").on("click", function (event) {
        if($(event.target).hasClass('btn')){
            IDthis = $(event.target).attr('id');
            IDSelected = document.getElementById('name'+IDthis).textContent; 
                // read the favorites from localStorage
                var favorites = localStorage.getItem("favorites") || "[]";
                favorites = JSON.parse(favorites);
                // Look for the favorites
                var position = favorites.findIndex(function(e) {
                    return e == IDSelected; });
                if (position != -1) {
                // if the element exist, remove the element
                favorites.splice(position, 1);
                } else {
                // else add to Favorites
                favorites.push(IDSelected);
                }
                // Save the list of favorites 
                localStorage.setItem("favorites", JSON.stringify(favorites));
                addFavorites();
        }
    });

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
    // agregamos el producto donde correspona
    $("#favorites").append(tittle);
    $("#favorites").append(ul);
}

