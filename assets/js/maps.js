mapboxgl.accessToken = apiKey;
var map = new mapboxgl.Map({
  container: "mapContainer",
  style: "mapbox://styles/mapbox/streets-v11",
});
// Add the controls
map.addControl(new mapboxgl.NavigationControl());
