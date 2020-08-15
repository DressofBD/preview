  $( document ).ready(function() {
       var shrinkHeader = 500;
        $(window).scroll(function() {
        var scroll = getCurrentScroll();
          if ( scroll >= shrinkHeader ) {
             $('.hdr-top').addClass('sticky');
          }
          else {
            $('.hdr-top').removeClass('sticky');
          }
        });
      function getCurrentScroll() {
        return window.pageYOffset;
        }
      });


  $("#news-ticker").eocjsNewsticker({
    divider: "&nbsp; ",
    interval: 30,    
    speed: 10,
    timeout: 0.5
  });
    $("#news-ticker2").eocjsNewsticker({
    divider: "&nbsp; ",
    interval: 30,    
    speed: 25,
    timeout: 0.5
  });
