$.getJSON("https://extreme-ip-lookup.com/json/", function (data) {
    console.log("### DATA: ", data);
    var country = data.country;
    var city = data.city;
    var ip = data.query;
    var cc = "flag-icon flag-icon-" + data.countryCode.toLowerCase();
    var yourLat = data.lat;
    var yourLon = data.lon;

    $('#con').text(country);
    $('#cit').text(city);
    $('#ip').text(ip);
    $('#flag').addClass(cc);

    var yourPosition = new google.maps.LatLng(yourLat, yourLon);

    var mapOptions = {
        zoom: 10,
        center: yourPosition,
        disableDefaultUI: true,
        styles: [{ "stylers": [{ "hue": "#ff1a00" }, { "invert_lightness": true }, { "saturation": -100 }, { "lightness": 25 }, { "gamma": 0.5 }] }]
    }

});