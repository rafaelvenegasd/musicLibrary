//** This file contain the functions for load content by default when the page is ready */

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
            // Container
            var myNode = document.createElement('div');
            myNode.classList.add('card');
            // Body of the container
            var myNodeCardBody = document.createElement('div');
            myNodeCardBody.classList.add('card-body');
            // Tittle
            var myNodeTitle = document.createElement('h4');
            myNodeTitle.classList.add('card-title');
            myNodeTitle.id = 'name' + itemSong.id;
            myNodeTitle.textContent = itemSong.songName;
            // Caratula
            var myNodeCaratula = document.createElement('img');
            myNodeCaratula.src = itemSong.caratula;   
            // ArtistName
            var myNodeArtistName = document.createElement('p');
            myNodeArtistName.textContent = "Artist: " + itemSong.artistName;  
            // AlbumName
            var myNodeAlbumName = document.createElement('p');
            myNodeAlbumName.textContent = "Album: " + itemSong.albumName;                
            // Price
            var myNodePrice = document.createElement('p');
            myNodePrice.textContent = "Price: " + itemSong.price;                        
            // Lenght
            var myNodeLenght = document.createElement('p');
            myNodeLenght.textContent = "Lenght: " + itemSong.lenght;                        
            // CreationDate
            var myNodeCreationDate = document.createElement('p');
            myNodeCreationDate.textContent = "Creation date: " + itemSong.creationDate;                        
            // Genre
            var myNodeGenre = document.createElement('p');
            myNodeGenre.textContent = "Genre: " + itemSong.musicGenre;
            // Audio
            var myNodeAudio = document.createElement('audio');
            myNodeAudio.setAttribute('type', 'audio/m4a');
            myNodeAudio.id = "id" + itemSong.id;
            myNodeAudio.src = itemSong.audio;
            //Audio controls
            var myNodeDivAudio = document.createElement('div');
            //Play
            var myNodebuttonPlay = document.createElement('button');
            myNodebuttonPlay.setAttribute('marcador', itemSong.id);
            myNodebuttonPlay.addEventListener('click', playSong); 
            myNodebuttonPlay.classList = 'btn', 'btn-outline-light';
            myNodebuttonPlay.textContent = "▶";
            //Pause
            var myNodebuttonPause = document.createElement('button');
            myNodebuttonPause.setAttribute('marcador', itemSong.id);
            myNodebuttonPause.addEventListener('click', pauseSong);
            myNodebuttonPause.classList = 'btn', 'btn-outline-light';
            myNodebuttonPause.textContent = "⏸";
            //Stop
            var myNodebuttonStop = document.createElement('button');
            myNodebuttonStop.setAttribute('marcador', itemSong.id);
            myNodebuttonStop.addEventListener('click', stopSong);
            myNodebuttonStop.classList = 'btn', 'btn-outline-light';
            myNodebuttonStop.textContent = "⏹";
            // Link
            var myNodeLink = document.createElement('a');
            myNodeLink.textContent = "Link";
            myNodeLink.target = "_blank";
            myNodeLink.href = itemSong.link;
            // Add to Favorites
            var myNodeAddFavorites = document.createElement('button');
            myNodeAddFavorites.classList = 'btn', 'btn-outline-light';
            myNodeAddFavorites.setAttribute('selected', itemSong.id);
            myNodeAddFavorites.addEventListener('click', saveData);
            myNodeAddFavorites.addEventListener('click', addFavorites);
            myNodeAddFavorites.textContent = "⭐";
            // Inserting
            myNodeTitle.append(myNodeAddFavorites);
            myNodeCardBody.append(myNodeTitle);
            myNodeCardBody.append(myNodeCaratula);
            myNodeCardBody.append(myNodeArtistName);
            myNodeCardBody.append(myNodeAlbumName);
            myNodeCardBody.append(myNodePrice);
            myNodeCardBody.append(myNodeLenght);
            myNodeCardBody.append(myNodeCreationDate);
            myNodeCardBody.append(myNodeGenre);
            myNodeCardBody.append(myNodeAudio);
            myNodeCardBody.append(myNodeDivAudio);
            myNodeCardBody.append(myNodeDivAudio);
            myNodeDivAudio.append(myNodebuttonPlay);
            myNodeDivAudio.append(myNodebuttonPause);
            myNodeDivAudio.append(myNodebuttonStop);
            myNode.append(myNodeCardBody);
            $("#display").append(myNode);  

            //Functions for control the music
            function playSong(){
                IDthis = this.getAttribute('marcador');
                IDSelected = document.getElementById('id' + IDthis);
                IDSelected.play();
            }
            function pauseSong(){
                IDthis = this.getAttribute('marcador');
                IDSelected = document.getElementById('id' + IDthis);
                IDSelected.pause();
            }
            function stopSong(){
                IDthis = this.getAttribute('marcador');
                IDSelected = document.getElementById('id' + IDthis);
                IDSelected.load();
            }

            // Save in local Storage
            function saveData(e){
                e.preventDefault();
                IDthis = this.getAttribute('selected'); 
                IDSelected = document.getElementById('name' + IDthis).textContent; 
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
            }
        }
    })
    .fail(function() {
    console.log("error");
    });
})


function clean(element){
    element.empty();
}

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
