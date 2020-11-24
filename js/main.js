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

    $(document).keydown(
      function() {

        if (event.which == 37) {
          prevImg();
        } else if (event.which == 39) {
          nextImg();
        }

      }

    );

    $(".fa-circle").click(
      function(){
        var circles = $(".fa-circle"); //elementi convertibili in array
        var images = document.getElementsByClassName("image"); //elementi in classe per numbero come array
        var circlesElement = document.getElementsByClassName("fa-circle"); //elementi in classe per numbero come array
        var currentActive = $(".slider-wrapper .active");

        currentActive.removeClass("active");

        for (var i = 0; i < circles.length; i++) {
          if (this == circles.toArray()[i]) {
            images[i].classList.add("active");
            circlesElement[i].classList.add("active");
          }
        }
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
