// ** This file contain the function for search by videos */
function searchVideo(){
    addFavorites();
    clean($("#display"));
    var finder = new Search($("#inputSearch").val(), $("#country").val(), $("#limit").val(), $("#explicit").val(), "musicVideo"); 
    var datos = $.ajax(
        {
        type: "GET",
        dataType: "jsonp",
        url : "https://itunes.apple.com/search?" + "term=" + finder.term + "&" + "country=" + finder.country  + "&" + "explicit=" + finder.explicit  + "&" + "limit=" + finder.limit + "&" + "entity=" + finder.type 
    })
    
    .done(function() {
        for (var data of datos.responseJSON['results']) {
            // New Object Song
            var itemVideo = new MusicVideo(data['trackId'], data['trackName'], data['artworkUrl100'], data['artistName'], data['trackPrice'], data['releaseDate'], data['trackTimeMillis'], data['primaryGenreName'], data['previewUrl'], data['trackViewUrl']);
            if (data['previewUrl']){ //Just show eleements that have preview

                $("#display").append(
                    `<div class="card">
                        <div class="card-body">
                            <h4 class="card-title" id="name${itemVideo.id}"> ${itemVideo.songName} </h4>
                            <button class="btn" id="${itemVideo.id}">⭐</button>
                            <img src="${itemVideo.caratula}"></img>
                            <p>Price: ${itemVideo.price}</p>
                            <p>Lenght: ${convertMinutes(itemVideo.lenght)} minutes</p>
                            <p>Creation date: ${itemVideo.creationDate}</p>
                            <p>Genre: ${itemVideo.musicGenre}</p>
                            <a href="${itemVideo.link}" target="_blank" >Link </a>
                            <iframe ${itemVideo.id} alow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="${itemVideo.video}"></iframe>
                        </div>
                    </div>`)}
            }
    })
    .fail(function() {
    console.log("error");
    });
}