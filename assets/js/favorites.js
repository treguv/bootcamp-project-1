"use strict";
// make an arrray to hold all of the favorite
var favorites = [null, null, null, null];

// debug function fill all favorites
$("#fill-button").on("click", function () {
  for (var i = 0; i < favorites.length; i++) {
    var tempLocation = {
      name: "location " + i,
      lng: -122.23814613551343 + i / 100,
      lat: 47.492614951542635 + i / 100,
    };
    favorites[i] = tempLocation;
  }
  saveFavorites();
});
//This array will hold objects that hold the long and lat coords of that point
//Adds given location to the favorites list
function addFavorite(theLocation, theName) {
  //Make an object to be stored in the array
  var fav = {
    name: theName,
    lng: theLocation.lng,
    lat: theLocation.lat,
  };
  console.log(fav);
  //assign that object into favorites memory
  //this is a very inificient way of doing this. will be fixed with for loop
  favorites.unshift(fav);
  favorites.splice(favorites.length - 1, 1);

  //Call method to update the display
  displayFavorites();
  saveFavorites();
}
//displays the favorites in the appropriate fields
function displayFavorites() {
  for (var i = 1; i <= 4; i++) {
    var currentTarget = "#item-" + i;
    if (favorites[i - 1] != null) {
      $(currentTarget).text(favorites[i - 1].name);
    } else {
      $(currentTarget).text("");
    }
  }
}
//Listen for a click on on the favoites button
$("#favorite-button").on("click", function () {
  addFavorite(mouseLngLat, $("#place-name").val());
  $("#place-name").val("");
});

//load in the map points from favorites
$("#load-button").on("click", function () {
  loadFavoritesOntoMap();
});

function loadFavoritesOntoMap() {
  for (var i = 0; i < 4; i++) {
    //Loop Through favorites menu
    if (favorites[i] != null) {
      //Make and place markers from favorites menu
      var currentMarker = new mapboxgl.Marker()
        .setLngLat([favorites[i].lng, favorites[i].lat])
        .addTo(map);
    }
  }
}
//Detect when somthign from the favorites list is clicked
$("#favorite-item-group").on("click", ".list-item", function () {
  //Get the favorites item that was clicked
  var theClickedId = $(this).attr("id").replace("item-", "");
  //Select the object from array
  var theClickedItem = favorites[Number(theClickedId) - 1];
  //fly to that location on the map
  map.flyTo({
    // this flyto needs to be fine tuned to what we like
    center: [theClickedItem.lng, theClickedItem.lat],
    zoom: 15,
    speed: 0.5,
    curve: 1,
  });
});

//Now comes the fun art. Trying to remove items from the favorites
function removeFavorite(theItemNum) {
  theItemNum = Number(theItemNum);
  // we are going to remove that item. And shift all items below it up by one
  // favorites[theItemNum - 1] = null;
  // for (var i = favorites.length - 1; i > theItemNum; i--) {
  //   console.log("replacing", i, i - 1);
  //   favorites[i] = favorites[i - 1];
  // }

  favorites.splice(theItemNum - 1, 1);
  favorites.push(null);
  saveFavorites();
}

// Detect rmb presses on the favorite items
$("#favorite-item-group .list-item").mousedown(function (event) {
  if (event.which === 3) {
    //console.log($(this).attr("id").replace("item-", ""));
    removeFavorite($(this).attr("id").replace("item-", ""));
  }
});
// Handle the storing into local

function loadFavorites() {
  //Load in the array from localstorage
  if (localStorage.getItem("favorites") !== null) {
    favorites = JSON.parse(localStorage.getItem("favorites"));
  } else {
    saveFavorites();
  }
  //load everything onto the page appropriatly
  for (var i = 1; i <= 4; i++) {
    var theCurrentSelection = "#item-" + i;
    // console.log($(theCurrentSelection));
    if (favorites[i - 1] != null) {
      $(theCurrentSelection).text(favorites[i - 1].name);
    } else {
      $(theCurrentSelection).text("");
    }
  }
}

function saveFavorites() {
  // Convert the array into a json string
  var theJsonFavorites = JSON.stringify(favorites);
  localStorage.setItem("favorites", theJsonFavorites);
  loadFavorites();
}

loadFavorites();
