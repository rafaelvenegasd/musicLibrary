import Artist from "../../classes/artist";
import Search from "../../classes/search";
import { clean , selectedCountry, convertMinutes} from "../functions/functions";
import { addFavorites } from "../functions/favorites";
export function searchArtist(){
    addFavorites();
    clean($("#display"));
    var finder = new Search($("#inputSearch").val(), selectedCountry(), $("#limit").val(), $("#explicit").val(), "musicArtist"); 
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
            $("#display").append(
                `<div class="card">
                    <div class="card-body">
                        <h4 class="card-title" id="name${itemArtist.id}"> ${itemArtist.artistName} </h4>
                        <p>Genre: ${itemArtist.musicGenre}</p>
                        <a href="${itemArtist.link}" target="_blank" >Link </a>
                </div>`)}
    })
    .fail(function() {
    console.log("error");
    });
}