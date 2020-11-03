function windFetch(location) {
  var lon = location.lng;
  var lat = location.lat;
  var windApi = "https://api.weatherbit.io/v2.0/current?units=I&lat=" + lat + "&lon=" + lon + "&key=" + windApiKey;
  fetch(windApi).then(function (res) {
    return res.json();
  }).then(function (res) {
    console.log(res);

    var temp = res.data[0].temp;
    var wind = res.data[0].wind_spd;
    var rain = res.data[0].precip;
    var uv = res.data[0].uv;

    document.getElementById("map-text").textContent = "Current wind speed is " + wind + " mph";
    document.getElementById("temp").textContent = "Temperature: " + temp + " ";
    document.getElementById("wind").textContent = "Wind Speed: " + wind + " ";
    document.getElementById("rain").textContent = "Rain: " + rain + " ";
    document.getElementById("uv").textContent = "UV: " + uv + " ";

    if (wind > 7 && wind < 25) {
      var windScore = 5;
    } else if (wind > 3 && wind < 8) {
      var windScore = 3;
    } else if (wind <= 3) {
      var windScore = 1;
    } else {
      var windScore = 0;
    };
    for (i = 5 - windScore; i < 5; i++) {
      var starEl = document.createElement("i");
      starEl.setAttribute("class", "fas fa-star");
      document.getElementById("wind").appendChild(starEl);
    }
  })
};