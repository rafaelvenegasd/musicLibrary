// Get the list of countries
const countries = $.ajax({
    url: "https://www.liferay.com/api/jsonws/country/get-countries/",
    dataType:"json",
    type:"GET",
    success: function(response){
        $.each(response, function (params) {
            $("#country").append(
            '<option id="'+ response[params].a2 + '">' + response[params].a2 + ' - ' + response[params].name  + '</option>'
            );
        })
    }
}).fail(function(error){
    console.log(error);
});

export {countries}