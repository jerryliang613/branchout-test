$(document).ready(function () {
  $(".slide").slick({
    arrows: false,
    autoplay: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          dotsClass: "slick-dots",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          dotsClass: "slick-dots",
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

//benefit section
$(document).ready(function () {
  $(".benefit").slick({
    arrows: false,
    autoplay: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    dotsClass: "slick-dots",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          dotsClass: "slick-dots",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          dots: true,
          dotsClass: "slick-dots",
          variableWidth: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

//package section
$(document).ready(function () {
  $(".packages_slide").slick({
    autoplay: true,
    infinite: false,
    dots: true,
    dotsClass: "slick-dots",
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
});

//menu bar bg added when scroll
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $(".header").css({
        "background-color": "#f7f1e2",
        "padding-top": "1rem",
        "padding-bottom": "1rem",
      });
      $(".header .logo div").css("background-color", "#d9664c");
      $(".header_left a").css("color", "#d9664c");
      $(".header_right a").css("color", "#d9664c");
      $(".social a div").css("background-color", "#d9664c");
      $("#burger_icon").css("color", "#d9664c");
      $("#burger_icon span.menu_dash").css("background-color", "#d9664c");
    } else {
      $(".header").css({
        "background-color": "transparent",
        "padding-top": "2rem",
        "padding-bottom": "2rem",
      });
      $(".header .logo div").css("background-color", "white");
      $(".header a").css("color", "white");
      $(".social a div").css("background-color", "white");
      $("#burger_icon").css("color", "white");
      $("#burger_icon span.menu_dash").css("background-color", "white");
    }
  });
});

//menu icon click event
$(document).ready(function () {
  $("#burger_icon").click(function () {
    $("#menu_mobile").toggle();
  });
  $("#mobile_close").click(function () {
    console.log("click");
    $("#menu_mobile").toggle();
  });
});
