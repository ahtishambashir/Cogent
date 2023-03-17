// add class on scroll on header 
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $(".header").addClass("fixed-top");
  } else {
    $(".header").removeClass("fixed-top");
  }
});

// toggle menu on mobile

$('.nav-toggler').on('click', function (e) {
  $('.header-nav').toggleClass("open");
  e.preventDefault();
});
