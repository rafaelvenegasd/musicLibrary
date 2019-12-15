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
            myNodeGenre.textContent = "Genre: " +itemArtist.musicGenre;
            // Link
            var myNodeLink = document.createElement('p');
            myNodeLink.textContent = "Link: " +itemArtist.link;
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
            myNodeArtistName.textContent = "Artist: " + itemAlbum.artistName;                       
            // Caratula
            var myNodeCaratula = document.createElement('img');
            myNodeCaratula.src = itemAlbum.caratula;                    
            // Price
            var myNodePrice = document.createElement('p');
            myNodePrice.textContent = "Price: " + itemAlbum.price;                        
            // NumSongs
            var myNodeNumSongs = document.createElement('p');
            myNodeNumSongs.textContent = "Songs: " + itemAlbum.numSongs;                        
            // CreationDate
            var myNodeCreationDate = document.createElement('p');
            myNodeCreationDate.textContent = "Creation date: " + itemAlbum.creationDate;                        
            // Genre
            var myNodeGenre = document.createElement('p');
            myNodeGenre.textContent = "Genre: " + itemAlbum.musicGenre;
                // Inserting
            myNodeCardBody.append(myNodeTitle);
            myNodeCardBody.append(myNodeCaratula);
            myNodeCardBody.append(myNodeArtistName);
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
            // New Object Song
            var itemSong = new Song(data['trackName'], data['artworkUrl100'], data['artistName'], data['collectionName'], data['trackPrice'], data['trackTimeMillis'], data['releaseDate'], data['primaryGenreName'], data['previewUrl'], data['trackViewUrl']);
            // Container
            var myNode = document.createElement('div');
            myNode.classList.add('card');
            // Body of the container
            var myNodeCardBody = document.createElement('div');
            myNodeCardBody.classList.add('card-body');
            // Tittle
            var myNodeTitle = document.createElement('h4');
            myNodeTitle.classList.add('card-title');
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
            myNodeAudio.src = itemSong.audio;
            // Link
            var myNodeLink = document.createElement('a');
            myNodeLink.textContent = "Link";
            myNodeLink.target = "_blank";
            myNodeLink.href = itemSong.link;
                // Inserting
            myNodeCardBody.append(myNodeTitle);
            myNodeCardBody.append(myNodeCaratula);
            myNodeCardBody.append(myNodeArtistName);
            myNodeCardBody.append(myNodeAlbumName);
            myNodeCardBody.append(myNodePrice);
            myNodeCardBody.append(myNodeLenght);
            myNodeCardBody.append(myNodeCreationDate);
            myNodeCardBody.append(myNodeGenre);
            myNodeCardBody.append(myNodeAudio);
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