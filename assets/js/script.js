// toggle modals
var recentsModal = $("#recents-modal");
var favoritesModal = $("#favorites-modal");

$("#recents-btn").on("click", function () {
  recentsModal.addClass("is-active");
});

$("#close-recents").on("click", function () {
  recentsModal.removeClass("is-active");
});

$("#favorites-btn").on("click", function () {
  favoritesModal.addClass("is-active");
});

$("#close-favs").on("click", function () {
  favoritesModal.removeClass("is-active");
});

// Close modals on blur
$("#recents-modal").on("blur", function () {
  recentsModal.removeClass("is-active");
  console.log("blur");
});

$("#favorites-modal").on("blur", function () {
  recentsModal.removeClass("is-active");
  console.log("blur");
});
