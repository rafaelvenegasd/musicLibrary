var datos = $.ajax({
    type: "GET",
    dataType: "jsonp",
    url : "https://itunes.apple.com/search?"
})

$("#inputSearch").autocomplete({
    source: datos['artistName']
});