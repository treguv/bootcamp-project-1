mapboxgl.accessToken = apiKey;
var map = new mapboxgl.Map({
  container: "mapContainer",
  style: "mapbox://styles/mapbox/streets-v11",
});

// Add search bar / geocoder
map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
  })
);

// Add the controls
// map.addControl(new mapboxgl.NavigationControl());

//add lat long tracking to the mouse
var mouseLngLat;
map.on("mousemove", function (e) {
  // e.lngLat is the longitude, latitude geographical position of the event
  document.getElementById("map-text").textContent = JSON.stringify(
    e.lngLat.wrap()
  );
  mouseLngLat = e.lngLat;
});
var clickMarker = new mapboxgl.Marker().setLngLat([0, 0]);
function mapClickHandler(event) {
  console.log(mouseLngLat);
  clickMarker.remove();
  //Now we know what the current clicks lng and lat are and we make a new marker
  clickMarker = new mapboxgl.Marker()
    .setLngLat([mouseLngLat.lng, mouseLngLat.lat])
    .addTo(map);
}

mapEl = document.getElementById("mapContainer");
mapEl.addEventListener("click", mapClickHandler);
