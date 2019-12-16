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
                searchArtist();
                break;

            case "Song":
               searchSong();
                break;

            case "Album":
            searchAlbum();
                break;

            case "Music Video":
               searchVideo();
                break;
        }
    }   
})