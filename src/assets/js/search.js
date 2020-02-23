//** This file contain the function search*/
import { clean } from "./functions";
import { searchAlbum } from "./searchAlbum";
import { searchArtist } from "./searchArtist";
import { searchSong } from "./searchSong";
import { searchVideo } from "./searchVideo";
export default $("#inputSearch").keypress(function(){
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

