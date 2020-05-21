function fadeIn() {
  $(".section-title-one").css("opacity", 1);
  setTimeout(function () {
    $(".info-card").addClass("info-card-fade");
  }, 200);
  setTimeout(function () {
    $(".sec-2").css("opacity", 1);
  }, 400);
  setTimeout(function () {
    $(".section-title-two").css("opacity", 1);
  }, 600);
  setTimeout(function () {
    $(".sec-3").css("opacity", 1);
  }, 800);
}

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

fadeIn();
