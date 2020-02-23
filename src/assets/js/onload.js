// ** This file contain the functions for load content by default when the page is ready */
import { addFavorites, clean } from "./functions";
import Song from "../classes/song";
export default function onload(){
    addFavorites();
    clean($("#display"));
    var datos = $.ajax(
        {
        type: "GET",
        dataType: "jsonp",
        url : "https://itunes.apple.com/search?term=Foster+the+People&country=us&limit=20" 
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
                        <p>Lenght: ${itemSong.lenght}</p>
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


