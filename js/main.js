$(document).ready(

  function(){
    $(".next").click(
      function() {
        nextImg();
      }
    );

    $(".prev").click(
      function() {
        prevImg();
      }
    );

  }
);

function nextImg() {

  var currentActive = $(".slider-wrapper .active");
  var first = $(".slider-wrapper .first");

  currentActive.removeClass("active");

  if (currentActive.hasClass("last")) {
    first.addClass("active");
  } else {
    currentActive.next().addClass("active");
  }
}

function prevImg() {

  var currentActive = $(".slider-wrapper .active");
  var last = $(".slider-wrapper .last");

  currentActive.removeClass("active");

  if (currentActive.hasClass("first")) {
    last.addClass("active");
  } else {
    currentActive.prev().addClass("active");
  }
}
