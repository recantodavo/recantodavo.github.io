function initialize() {
    var mapProp = {
        center:new google.maps.LatLng(40.479231786780566, -7.776611637964379),
        zoom:14,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var marker = new google.maps.Marker({
        position: {lat: 40.479231786780566, lng: -7.776611637964379},
        map: map,
        title: 'Recanto da Avó'
    });
}
google.maps.event.addDomListener(window, 'load', initialize);