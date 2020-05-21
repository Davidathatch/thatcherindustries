$(".info-card").addClass("info-card-fade");

$(".droptdown-button").on("click", function () {
  if ($(".services ul").css("opacity") == 0) {
    $(".services ul").css("opacity", "1");
    $(".services ul").css("pointerEvents", "all");
    $(".services ul").css("transform", "translateY(-10px)");
  } else {
    $(".services ul").css("opacity", "0");
    $(".services ul").css("pointerEvents", "none");
    $(".services ul").css("transform", "translateY(10px)");
  }
});

$("html").on("click", function () {
  if ($(".services ul").css("opacity") == 1) {
    $(".services ul").css("opacity", "0");
    $(".services ul").css("pointerEvents", "none");
    $(".services ul").css("transform", "translateY(10px)");
  }
});
