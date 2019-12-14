//** This file contain the function search*/

$("#submit").click(function(event){
    event.preventDefault();
    //Validation
    if ($("#inputSearch").val() == "" || $("#inputSearch").val() == null){
        alert("Por favor escriba algo en el buscador");
    }

    else{
        clean($("#display"));
        // Type's Search Validation
        var type ="";
        switch ($("#type").val()) {
            case "Artist":
                type = "musicArtist"
                searchArtist();
                break;
            case "Song":
                type = "musicTrack"
                searchSong();
                break;
            case "Album":
                type = "album"
                searchAlbum();
                break;
            case "Music Video":
                type = "musicVideo"
                searchVideo();
                break;
        }
    }   
})