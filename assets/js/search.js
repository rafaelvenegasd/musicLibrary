//** This file contain the function search*/
$("#inputSearch").keypress(function(){

        clean($("#display"));
        // Type's Search Validation
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

            case "Music-Video":
               searchVideo();
                break;
        }
})