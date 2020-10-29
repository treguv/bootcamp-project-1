

function windFetch(location) {
  var lon = location.lng;
  var lat = location.lat;
  var windApi = "https://api.weatherbit.io/v2.0/current?units=I&lat=" + lat + "&lon=" + lon + "&key=" + windApiKey;
  fetch(windApi).then(function (res) {
    return res.json();
  }).then(function (res) {
    document.getElementById("map-text").textContent = "Current wind speed is " + res.data[0].wind_spd + " mph";
  })
};