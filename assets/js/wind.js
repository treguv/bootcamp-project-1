async function windFetch(location) {
  var lon = location.lng;
  var lat = location.lat;
  var windApi =
    "https://api.weatherbit.io/v2.0/current?units=I&lat=" +
    lat +
    "&lon=" +
    lon +
    "&key=" +
    windApiKey;
  await fetch(windApi)
    .then(async function (res) {
      var jsonVar = await res.json();
      console.log(jsonVar);
      displayWeatherData(jsonVar);
      return jsonVar;
    })
    .then(function (res) {
      document.getElementById("map-text").textContent =
        "Current wind speed is " + res.data[0].wind_spd + " mph";
    });
}

//place the correct data into its place
function displayWeatherData(data) {
  // add the correct data to the fields
  $("#temp").text("Temperature: " + data.data[0].temp + " F");
  $("#rain").text("Rain: " + data.data[0].precip + " %");
  $("#wind").text(
    "Wind Speed: " + data.data[0].wind_spd + "MPH  " + data.data[0].wind_cdir
  );
  $("#uv").text("UV: " + data.data[0].uv);
}
