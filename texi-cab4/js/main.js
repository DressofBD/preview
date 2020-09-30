$('#carousel1').owlCarousel({
    margin:0,
    autoplay:true,
    dots: false,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    loop:true,
    items:1,
    nav:true,
});

$('#carousel2').owlCarousel({
    margin:0,
    autoplay:true,
    dots: true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    loop:true,
    items:1,
    nav:true,
});






$(".via-loc-click").click(function() {
    $(".via-loca").toggleClass("d-block");
});
$(".minus").click(function() {
    $(".via-loca").removeClass("d-block");
});





$(window).scroll(function () {
  if ( $(this).scrollTop() > 150 && !$('header').hasClass('sticky') ) {
    $('header').addClass('sticky');
    $('header').slideDown(1000);
   } else if ( $(this).scrollTop() <= 150 ) {
    $('header').removeClass('sticky');
  }
});











