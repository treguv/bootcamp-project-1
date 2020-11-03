var recent = [null, null, null, null, null, null, null, null, null, null];

// load recent from local storage
function loadRecent() {
  //Load in the array from localstorage
  if (localStorage.getItem("recent") !== null) {
    recent = JSON.parse(localStorage.getItem("recent"));
  } else {
    saveRecent();
  }
  //load everything onto the page appropriatly
  for (var i = 1; i <= recent.length; i++) {
    var theCurrentSelection = "#recent-" + i;
    console.log($(theCurrentSelection));
    if (recent[i - 1] != null) {
      //console.log(recent[i - 1]);
      $(theCurrentSelection).val(recent[i - 1].name);
    } else {
      $(theCurrentSelection).val("");
    }
  }

  displayRecent();
}
// save recent to local storage
function saveRecent() {
  // Convert the array into a json string
  var theJsonRecent = JSON.stringify(recent);
  console.log(recent.length);
  localStorage.setItem("recent", theJsonRecent);
  loadRecent();
}

function addRecent(theLocation, theName) {
  //Make an object to be stored in the array
  var rec = {
    name: theName,
    lng: theLocation.lng,
    lat: theLocation.lat,
  };
  console.log(rec);
  //assign that object into favorites memory
  //this is a very inificient way of doing this. will be fixed with for loop
  recent.unshift(rec);
  recent.splice(recent.length - 1, 1);

  //Call method to update the display
  //   displayFavorite();
  saveRecent();
}

//Displays the recent searches
function displayRecent() {
  for (var i = 1; i <= recent.length; i++) {
    var theCurrentSelection = "#recent-" + i;
    console.log($(theCurrentSelection));
    if (recent[i - 1] != null) {
      //console.log(recent[i - 1]);
      $(theCurrentSelection).val(recent[i - 1].name);
    } else {
      $(theCurrentSelection).val("");
    }
  }
}
displayRecent();
loadRecent();
