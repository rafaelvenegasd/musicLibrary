$("#submit").click(function(event){
    event.preventDefault();
    var finder = new Search($("#inputSearch").val(), $("#country").val(), $("#limit").val(), $("#explicit").val(), $("#type").val()); 
    var datos = $.ajax(
        {
        type: "GET",
        dataType: "jsonp",
        url : "https://itunes.apple.com/search?" + "term=" + finder.term + "&" + "country=" + finder.country  + "&" + "explicit=" + finder.explicit  + "&" + "limit=" + finder.limit + "&" + "entity=" + finder.type 
    })
        
    .done(function(url) {
        for (var data of datos.responseJSON['results']) {
            // New Item
            var itemArtist = new Artist(data['artistName'], data['musicGenre'], data['link']);
            // Container
            var myNode = document.createElement('div');
            myNode.classList.add('card', 'col-md-3', 'ml-1', 'mb-2');
            // Body of the container
            var myNodeCardBody = document.createElement('div');
            myNodeCardBody.classList.add('card-body');
            // Tittle
            var myNodeTitle = document.createElement('h4');
            myNodeTitle.classList.add('card-title');
            myNodeTitle.textContent = itemArtist.artistName;
            // Genre
            var myNodeGenre = document.createElement('p');
            myNodeGenre.textContent = itemArtist.musicGenre;
            // Link
            var myNodeLink = document.createElement('p');
            myNodeLink.textContent = itemArtist.link;
             // Inserting
            myNodeCardBody.append(myNodeTitle);
            myNodeCardBody.append(myNodeGenre);
            myNodeCardBody.append(myNodeLink);
            myNode.append(myNodeCardBody);
            $("#display").append(myNode);    
        }
    })
    .fail(function() {
    console.log("error");
    });
})


