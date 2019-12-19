function searchArtist(){
    var finder = new Search($("#inputSearch").val(), $("#country").val(), $("#limit").val(), $("#explicit").val(), "musicArtist"); 
    var datos = $.ajax(
        {
        type: "GET",
        dataType: "jsonp",
        url : "https://itunes.apple.com/search?" + "term=" + finder.term + "&" + "country=" + finder.country  + "&" + "explicit=" + finder.explicit  + "&" + "limit=" + finder.limit + "&" + "entity=" + finder.type
    })
    
    .done(function() {
        for (var data of datos.responseJSON['results']) {
            // New Object Artist
            var itemArtist = new Artist(data['artistName'], data['primaryGenreName'], data['artistLinkUrl']);
            // Container
            var myNode = document.createElement('div');
            myNode.classList.add('card');
            // Body of the container
            var myNodeCardBody = document.createElement('div');
            myNodeCardBody.classList.add('card-body');
            // Tittle
            var myNodeTitle = document.createElement('h4');
            myNodeTitle.classList.add('card-title');
            myNodeTitle.id = 'name' + itemArtist.id;
            myNodeTitle.textContent = itemArtist.artistName;
            // Genre
            var myNodeGenre = document.createElement('p');
            myNodeGenre.textContent = "Genre: " +itemArtist.musicGenre;
            // Link
            var myNodeLink = document.createElement('p');
            myNodeLink.textContent = "Link: " +itemArtist.link;
            // Add to Favorites
            var myNodeAddFavorites = document.createElement('button');
            myNodeAddFavorites.classList = 'btn', 'btn-outline-light';
            myNodeAddFavorites.setAttribute('selected', itemArtist.id);
            myNodeAddFavorites.addEventListener('click', saveData);
            myNodeAddFavorites.addEventListener('click', addFavorites);
            myNodeAddFavorites.textContent = "⭐";
            // Inserting
            myNodeCardBody.append(myNodeTitle);
            myNodeTitle.append(myNodeAddFavorites);
            myNodeCardBody.append(myNodeGenre);
            myNodeCardBody.append(myNodeLink);
            myNodeCardBody.append(myNodeAddFavorites);
            myNode.append(myNodeCardBody);
            $("#display").append(myNode);  
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
}