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
