//** This file contain the function search*/
import { clean } from "./functions/functions";
import { searchAlbum } from "./searchs/searchAlbum";
import { searchArtist } from "./searchs/searchArtist";
import { searchSong } from "./searchs/searchSong";
import { searchVideo } from "./searchs/searchVideo";


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

