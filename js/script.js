var link = document.querySelector(".popup");
var popup = document.querySelector(".popup-form");
var close = document.querySelector(".popup");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("popup-form-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("popup-form-show")) {
            popup.classList.remove("popup-form-show");
        }
    }
});

var map;
function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(34.86917, -111.76168),
        zoom: 8,
};
map = new google.maps.Map(document.getElementById("map"), Options);
}
google.maps.event.addDomListener(window, 'load', initialize);

var marker = new google.maps.Marker({
 position: new google.maps.LatLng(34.86917, -111.76168),
 map: map
});
