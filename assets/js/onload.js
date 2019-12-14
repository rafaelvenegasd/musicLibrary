//** This file contain the functions for load content by default when the page is ready */

$("document").ready(function(){
        clean($("#display"));
        var datos = $.ajax(
            {
            type: "GET",
            dataType: "jsonp",
            url : "https://itunes.apple.com/search?term=jim+jones&country=ca&limit=20" 
        })

        .done(function() {
            console.log(datos.responseJSON['results']);
            for (var data of datos.responseJSON['results']) {
                // New Item
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

})


function clean(element){
    element.empty();
}