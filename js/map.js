var map;

function map() {
  var map = new google.maps.Map(document.querySelector(" #map"), {
    zoom: 13,
    center: { lat: 41.285541, lng: 69.1487023},
    styles:[
    {
        "stylers": [
            {
                "hue": "#ff1a00"
            },
            {
                "invert_lightness": true
            },
            {
                "saturation": -100
            },
            {
                "lightness": 33
            },
            {
                "gamma": 0.5
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2D333C"
            }
        ]
    }
]
  });
  addMarker(map);
}

function addMarker(map) {
  var marker = new google.maps.Marker({
    position: { lat: 41.285541, lng: 69.1487023 },
    map: map,
    icon: "img/map-marker.png"
  });
}
$(window).scroll(function(){
    if($(window).scrollTop() < $('#map').height() + 21) 
        $('#map').css({'transform':'translate(0px,'+$(window).scrollTop()+'px)'});
});

map();


