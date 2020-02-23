import  Album  from "../classes/album";
import  Search  from "../classes/search";
import { addFavorites, clean, convertMinutes } from "./functions";
import "./functions";
export function searchAlbum(){
    addFavorites();
    clean($("#display"));
    var finder = new Search($("#inputSearch").val(), selectedCountry(), $("#limit").val(), $("#explicit").val(), "musicTrack"); 
    var datos = $.ajax(
        {
        type: "GET",
        dataType: "jsonp",
        url : "https://itunes.apple.com/search?" + "term=" + finder.term + "&" + "country=" + finder.country  + "&" + "explicit=" + finder.explicit  + "&" + "limit=" + finder.limit + "&" + "entity=" + finder.type 
    })
    
    .done(function() {
        for (var data of datos.responseJSON['results']) {
            // New Object Album
            var itemAlbum = new Album(data['collectionCensoredName'], data['artworkUrl100'], data['artistName'], data['collectionPrice'], data['trackCount'], data['releaseDate'], data['primaryGenreName']);
            $("#display").append(
                `<div class="card">
                    <div class="card-body">
                        <h4 class="card-title" id="name${itemAlbum.id}"> ${itemAlbum.albumName} </h4>
                        <img src="${itemAlbum.caratula}"></img>
                        <p>Artist: ${itemAlbum.artistName}</p>
                        <p>Price: ${itemAlbum.price}</p>
                        <p>Num of Songs: ${itemAlbum.numSongs}</p>
                        <p>Creation date: ${itemAlbum.creationDate}</p>
                        <p>Genre: ${itemAlbum.musicGenre}</p>
                    </div>
                </div>`)}
    })
    .fail(function() {
    console.log("error");
    });
}