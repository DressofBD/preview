// remap jQuery to $
(function($){})(window.jQuery);

window.jQuery = window.$ = jQuery;

/* trigger when page is ready */
$(document).ready(function (){
	

	// home_carusel
	
	$("#slider-02").carouFredSel({
		responsive	: true,
		height: "variable",
		items 		: {
			
			visible		: {
				min			: 1,
				max			: 3
			}
			
		},
		auto 		: false,
		direction	: "left",
		scroll		: {
			duration		: 500,
			timeoutDuration	: 3000,
			items			: 1
		},
		prev : "#slider-02_prev",
		next : "#slider-02_next"
		
	});
	
	
	// Accordion on Privacy Policy page
	jQuery( "#ppol-accordion" ).accordion({
		heightStyle: "content"
	});
	
	// City page car tabs
	$( "#cartabs" ).tabs();
	
	
	// mobile nav
	
	$('#meni-img').click(function() {						  
		$("#nav-mob").slideToggle({
	      direction: "down"
	    }, 1000);		
	}); 
	

    var windowsWidth = $(window).width();
  
	
	

	
	// js for limolabs plugin nav
	$('.limoLabsWidgetNavigationMobile').css('top', $('#header').height());
	$( window ).resize(function(){
		$('.limoLabsWidgetNavigationMobile').css('top', $('#header').height());
	});
    
    $('#indx-01_w').css('margin-top', $('#header_w').height());
    $('#pg_normal').css('margin-top', $('#header_w').height());
    $('#main-content').css('margin-top', $('#header_w').height());
    $('.header-padding').css('margin-top', $('#header_w').height());
    
 //   $('#cycloneslider-home-1 .cycloneslider-home-1')
    
});


// index scroll on services and contact part

$(window).ready(function(){
if(window.location.hash == '#/indx-04'){
        $('html, body').animate({
            scrollTop: $("#indx-04").offset().top - $('#header').height()
        }, 1500);
    }
    
    if(window.location.hash == '#/indx-05'){
        $('html, body').animate({
            scrollTop: $("#indx-05").offset().top - $('#header').height()
        }, 1500);
    }



});

