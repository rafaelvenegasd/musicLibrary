//** This file contain the functions for do the different types of searchs */
function searchArtist(){
    var finder = new Search($("#inputSearch").val(), $("#country").val(), $("#limit").val(), $("#explicit").val(), "musicArtist"); 
    var datos = $.ajax(
        {
        type: "GET",
        dataType: "jsonp",
        url : "https://itunes.apple.com/search?" + "term=" + finder.term + "&" + "country=" + finder.country  + "&" + "explicit=" + finder.explicit  + "&" + "limit=" + finder.limit + "&" + "entity=" + finder.type 
    })
    
    .done(function() {
        console.log(datos.responseJSON['results']);
    
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
            myNodeTitle.textContent = itemArtist.artistName;
            // Genre
            var myNodeGenre = document.createElement('p');
            myNodeGenre.textContent = itemArtist.musicGenre;
            // Link
            var myNodeLink = document.createElement('p');
            myNodeLink.textContent = itemArtist.link;
                // Inserting
            myNodeCardBody.append(myNodeTitle);
            myNodeCardBody.append(myNodeGenre);
            myNodeCardBody.append(myNodeLink);
            myNode.append(myNodeCardBody);
            $("#display").append(myNode);    
        }
    })
    .fail(function() {
    console.log("error");
    });
}

function searchAlbum(){
    var finder = new Search($("#inputSearch").val(), $("#country").val(), $("#limit").val(), $("#explicit").val(), "musicTrack"); 
    var datos = $.ajax(
        {
        type: "GET",
        dataType: "jsonp",
        url : "https://itunes.apple.com/search?" + "term=" + finder.term + "&" + "country=" + finder.country  + "&" + "explicit=" + finder.explicit  + "&" + "limit=" + finder.limit + "&" + "entity=" + finder.type 
    })
    
    .done(function() {
        console.log(datos.responseJSON['results']); 
    
        for (var data of datos.responseJSON['results']) {
            // New Object Album
            var itemAlbum = new Album(data['collectionCensoredName'], data['artworkUrl100'], data['artistName'], data['collectionPrice'], data['trackCount'], data['releaseDate'], data['primaryGenreName']);
            // Container
            var myNode = document.createElement('div');
            myNode.classList.add('card');
            // Body of the container
            var myNodeCardBody = document.createElement('div');
            myNodeCardBody.classList.add('card-body');
            // Tittle
            var myNodeTitle = document.createElement('h4');
            myNodeTitle.classList.add('card-title');
            myNodeTitle.textContent = itemAlbum.albumName;
            // ArtistName
            var myNodeArtistName = document.createElement('p');
            myNodeArtistName.textContent = itemAlbum.artistName;                       
            // Caratula
            var myNodeCaratula = document.createElement('img');
            myNodeCaratula.src = itemAlbum.caratula;
            // myNodeCaratula.classList.add('catalog-item');                      
            // Price
            var myNodePrice = document.createElement('p');
            myNodePrice.textContent = itemAlbum.price;                        
            // NumSongs
            var myNodeNumSongs = document.createElement('p');
            myNodeNumSongs.textContent = itemAlbum.numSongs;                        
            // CreationDate
            var myNodeCreationDate = document.createElement('p');
            myNodeCreationDate.textContent = itemAlbum.creationDate;                        
            // Genre
            var myNodeGenre = document.createElement('p');
            myNodeGenre.textContent = itemAlbum.musicGenre;
                // Inserting
            myNodeCardBody.append(myNodeTitle);
            myNodeCardBody.append(myNodeArtistName);
            myNodeCardBody.append(myNodeCaratula);
            myNodeCardBody.append(myNodePrice);
            myNodeCardBody.append(myNodeNumSongs);
            myNodeCardBody.append(myNodeCreationDate);
            myNodeCardBody.append(myNodeGenre);
            myNode.append(myNodeCardBody);
            $("#display").append(myNode);    
        }
    })
    .fail(function() {
    console.log("error");
    });
}

function searchSong(){
    var finder = new Search($("#inputSearch").val(), $("#country").val(), $("#limit").val(), $("#explicit").val(), "album"); 
    var datos = $.ajax(
        {
        type: "GET",
        dataType: "jsonp",
        url : "https://itunes.apple.com/search?" + "term=" + finder.term + "&" + "country=" + finder.country  + "&" + "explicit=" + finder.explicit  + "&" + "limit=" + finder.limit + "&" + "entity=" + finder.type 
    })
    
    .done(function() {
        console.log(datos.responseJSON['results']);
    
        for (var data of datos.responseJSON['results']) {
            // New Object Song
            var itemArtist = new Song(data['artistName'], data['primaryGenreName'], data['artistLinkUrl']);
            // Container
            var myNode = document.createElement('div');
            myNode.classList.add('card');
            // Body of the container
            var myNodeCardBody = document.createElement('div');
            myNodeCardBody.classList.add('card-body');
            // Tittle
            var myNodeTitle = document.createElement('h4');
            myNodeTitle.classList.add('card-title');
            myNodeTitle.textContent = itemArtist.artistName;
            // Genre
            var myNodeGenre = document.createElement('p');
            myNodeGenre.textContent = itemArtist.musicGenre;
            // Link
            var myNodeLink = document.createElement('p');
            myNodeLink.textContent = itemArtist.link;
                // Inserting
            myNodeCardBody.append(myNodeTitle);
            myNodeCardBody.append(myNodeGenre);
            myNodeCardBody.append(myNodeLink);
            myNode.append(myNodeCardBody);
            $("#display").append(myNode);    
        }
    })
    .fail(function() {
    console.log("error");
    });
}

function searchVideo(){
    var finder = new Search($("#inputSearch").val(), $("#country").val(), $("#limit").val(), $("#explicit").val(), "musicVideo"); 
    var datos = $.ajax(
        {
        type: "GET",
        dataType: "jsonp",
        url : "https://itunes.apple.com/search?" + "term=" + finder.term + "&" + "country=" + finder.country  + "&" + "explicit=" + finder.explicit  + "&" + "limit=" + finder.limit + "&" + "entity=" + finder.type 
    })
    
    .done(function() {
        console.log(datos.responseJSON['results']);
    
        for (var data of datos.responseJSON['results']) {
            // New Object Music Video
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
            myNodeTitle.textContent = itemArtist.artistName;
            // Genre
            var myNodeGenre = document.createElement('p');
            myNodeGenre.textContent = itemArtist.musicGenre;
            // Link
            var myNodeLink = document.createElement('p');
            myNodeLink.textContent = itemArtist.link;
                // Inserting
            myNodeCardBody.append(myNodeTitle);
            myNodeCardBody.append(myNodeGenre);
            myNodeCardBody.append(myNodeLink);
            myNode.append(myNodeCardBody);
            $("#display").append(myNode);    
        }
    })
    .fail(function() {
    console.log("error");
    });
}