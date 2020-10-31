// make an arrray to hold all of the favorite
var favorites = [null, null, null, null];

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
  favorites[3] = favorites[2];
  favorites[2] = favorites[1];
  favorites[1] = favorites[0];
  favorites[0] = fav;
  //Call method to update the display
  displayFavorites();
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
  for (var i = 0; i < 4; i++) {
    //Loop Through favorites menu
    if (favorites[i] != null) {
      //Make and place markers from favorites menu
      var currentMarker = new mapboxgl.Marker()
        .setLngLat([favorites[i].lng, favorites[i].lat])
        .addTo(map);
    }
  }
});
//Detect when somthign from the favorites list is clicked
$("#favorite-item-group").on("click", ".list-item", function () {
  //Get the favorites item that was clicked
  var theClickedId = $(this).attr("id").replace("item-", "");
  //Select the object from array
  var theClickedItem = favorites[Number(theClickedId) - 1];
  //Make marker and center around it on the map.
  // The make marker will need to be removed when we have all markeres loadef from local storage
  var currentMarker = new mapboxgl.Marker()
    .setLngLat([theClickedItem.lng, theClickedItem.lat])
    .addTo(map);

  //fly to that location on the map
  map.flyTo({
    // this flyto needs to be fine tuned to what we like
    center: [theClickedItem.lng, theClickedItem.lat],
    zoom: 15,
    speed: 0.5,
    curve: 1,
  });
});
