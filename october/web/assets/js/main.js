

$( document ).ready(function() {
 var shrinkHeader = 100;
  $(window).scroll(function() {
	var scroll = getCurrentScroll();
	  if ( scroll >= shrinkHeader ) {
		   $('header').addClass('sticky');
		}
		else {
			$('header').removeClass('sticky');
		}
  });
function getCurrentScroll() {
	return window.pageYOffset;
	}
});