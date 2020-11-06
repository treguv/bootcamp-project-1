function windFetch(location) {
  var lng = location.lng;
  var lat = location.lat;
  var windApi = "https://api.weatherbit.io/v2.0/current?units=I&lat=" + lat + "&lon=" + lng + "&key=" + windApiKey;
  fetch(windApi).then(function (res) {
    return res.json();
  }).then(function (res) {
    console.log(res);

    var temp = res.data[0].temp;
    var wind = res.data[0].wind_spd;
    var rain = res.data[0].precip;
    var uv = res.data[0].uv;

    document.getElementById("map-text").textContent = "Fly Score: ";
    document.getElementById("temp").textContent = "Temperature: " + temp + "°F";
    document.getElementById("wind").textContent = "Wind: " + wind + " mph ";
    document.getElementById("rain").textContent = "Rain: " + rain + " %";
    document.getElementById("uv").textContent = "UV: " + uv;

    if (wind > 7 && wind < 20) {
      var windScore = 5;
    } else if (wind > 3 && wind < 8) {
      var windScore = 4;
    } else if (wind > 19 && wind < 26) {
      var windScore = 3;
    } else if (wind > 1 && wind <= 3) {
      var windScore = 2;
    } else if (wind <= 1) {
      var windScore = 1;
    } else {
      var windScore = 0;
    };
    var emptyStars = 5 - windScore;
    for (i = emptyStars; i < 5; i++) {
      var starEl = document.createElement("i");
      starEl.setAttribute("class", "fas fa-star");
      document.getElementById("map-text").appendChild(starEl);
    }
    for (i = 0; i < emptyStars; i++) {
      var starEl = document.createElement("i");
      starEl.setAttribute("class", "far fa-star");
      document.getElementById("map-text").appendChild(starEl);
    }

  })
};