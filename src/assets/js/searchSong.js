// ** This file contain the function for search by songs */
import  Song  from "../classes/song";
import  Search  from "../classes/search";
import { addFavorites, clean , selectedCountry, convertMinutes} from "./functions";
import "./functions";
export function searchSong(){
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
            // New Object Song
            var itemSong = new Song(data['trackId'], data['trackName'], data['artworkUrl100'], data['artistName'], data['collectionName'], data['trackPrice'], data['trackTimeMillis'], data['releaseDate'], data['primaryGenreName'], data['previewUrl'], data['trackViewUrl']);
            $("#display").append(
                `<div class="card">
                    <div class="card-body">
                        <h4 class="card-title" id="name${itemSong.id}"> ${itemSong.songName} </h4>
                        <button class="btn" id="${itemSong.id}">⭐</button>
                        <img src="${itemSong.caratula}"></img>
                        <p>Artist: ${itemSong.artistName}</p>
                        <p>Album: ${itemSong.albumName}</p>
                        <p>Price: ${itemSong.price}</p>
                        <p>Lenght: ${convertMinutes(itemSong.lenght)}</p>
                        <p>Creation date: ${itemSong.creationDate}</p>
                        <p>Genre: ${itemSong.musicGenre}</p>
                        <a href="${itemSong.link}" target="_blank" >Link </a>
                        <audio type="audio/m4a" id="${itemSong.id}" src="${itemSong.audio}" controls></audio>
                    </div>
                </div>`)}
    })
    .fail(function() {
    console.log("error");
    });
}