


$("#submit").click(function(){
    event.preventDefault();
    var finder = new Search($("#inputSearch").val(), $("#country").val(), $("#limit").val(), $("#explicit").val(), $("#type").val()); 
    $.ajax(
        {
        type: "GET",
        dataType: "jsonp",
        url : "https://itunes.apple.com/search?" + "term=" + finder.term + "&" + "country=" + finder.country  + "&" + "explicit=" + finder.explicit  + "&" + "limit=" + finder.limit + "&" + "entity=" + finder.type 
    })
        
    .done(function(url) {
    console.log(url);
    })
    .fail(function() {
    console.log("error");
    });
})


