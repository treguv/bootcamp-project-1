// toggle modals
var recentsModal = $("#recents-modal");
var favoritesModal = $("#favorites-modal");

$("#recents-btn").on("click", function () {
  recentsModal.addClass("is-active");
});


$("#favorites-btn").on("click", function () {
  favoritesModal.addClass("is-active");
});


// close modals 
$("#close-recents").on("click", function () {
  recentsModal.removeClass("is-active");
});

$("#close-favs").on("click", function () {
  favoritesModal.removeClass("is-active");
});

window.addEventListener("click", function (event) {
  if (event.target.className === "modal-background") {
    recentsModal.removeClass("is-active");
    favoritesModal.removeClass("is-active");
  }
});

// get user location
var startCoords = [-122.335167, 47.608013];
window.onload = async function () {
  var startPos;
  var geoSuccess = function (position) {
    startPos = position;
    startCoords = [startPos.coords.longitude, startPos.coords.latitude];
    map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: startCoords, //Can be changed to users location
      zoom: 10,
    });
  };
  await navigator.geolocation.getCurrentPosition(geoSuccess);
};
