// remap jQuery to $
(function($){})(window.jQuery);

/* trigger when page is ready */
$(document).ready(function ($){
	
	// button icons
	// homeurl and themedir variables created in header.php
	
	$("span.rh-black-arrow").parent().hover(function(){
		$(this).find("span.rh-black-arrow").css("background-image", "url("+homeurl+"/wp-content/themes/"+themedir+"/images/icon-white-arrow.png)");
	},
	function(){
		$(this).find("span.rh-black-arrow").css("background-image", "url("+homeurl+"/wp-content/themes/"+themedir+"/images/icon-black-arrow.png)");
	});
	
	
	$("span.rh-white-arrow").parent().hover(function(){
		$(this).find("span.rh-white-arrow").css("background-image", "url("+homeurl+"/wp-content/themes/"+themedir+"/images/icon-black-arrow.png)");
	},
	function(){
		$(this).find("span.rh-white-arrow").css("background-image", "url("+homeurl+"/wp-content/themes/"+themedir+"/images/icon-white-arrow.png)");
	});
	
	
	$("span.rh-white-arrow-alt").parent().hover(function(){
		$(this).find("span.rh-white-arrow-alt").css("background-image", "url("+homeurl+"/wp-content/themes/"+themedir+"/images/icon-black-arrow.png)");
	},
	function(){
		$(this).find("span.rh-white-arrow-alt").css("background-image", "url("+homeurl+"/wp-content/themes/"+themedir+"/images/icon-white-arrow.png)");
	});
	
	
	$("span.rh-white-arrow-send").parent().hover(function(){
		$(this).find("span.rh-white-arrow-send").css("background-image", "url("+homeurl+"/wp-content/themes/"+themedir+"/images/icon-black-arrow.png)");
	},
	function(){
		$(this).find("span.rh-white-arrow-send").css("background-image", "url("+homeurl+"/wp-content/themes/"+themedir+"/images/icon-white-arrow.png)");
	});
	
	
	
	// fleet tabs
	
	// Select all the necessary HTML elements
	var $tabs = $('.tabs');
	var $panels = $('.panel');
	
	// When one of the tab buttons is clicked
	$tabs.on('click', 'a', function (e) {
	  // Stop the link from going to another page
	  e.preventDefault();
	  // Find the ID of the matching panel from the href attribute
	  var id = $(this).attr('href');
	
	  // Find the currently open panel and hide it
	  $panels.filter(':not([hidden])').attr('hidden', true);
	  // Using the ID, open the new panel
	  $(id).removeAttr('hidden');
	
	  // Find the currently highlighted tab button and remove the current class
	  $tabs.find('.js-current').removeClass('js-current');
	  $tabs.find('.current-tab').removeClass('current-tab');
	  // Add the current class to the new tab button
	  $(this).addClass('js-current');
	  $(this).parent().addClass('current-tab');
	});
	
	
	// unhide fleet if window size is less then 480px
	
	if($(window).width()<480){
        $panels.removeAttr('hidden');
    }
	
	
	
	// homepage testimonials
	
	$("#tes").owlCarousel({
		items : 3,
		navigation: true,
		navigationText : false,
		pagination: true,
		autoPlay : false,//5000,
		rewindNav : true,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [959,2],
		itemsTablet : [768,2],
		itemsMobile : [640,1]
	});



    /***** mobile nav *****/
    
    
    $('#mobile-nav  ').click(function() {						  
		$("#nav-mob").slideToggle({
	      direction: "down"
	    }, 1000);		
	}); 


});


/* trigger when page is resized */
jQuery(window).resize(function($){
    
	
	// hide fleet if window size is less then 480px
	
	var $panels = jQuery('.panel');
	
	if(jQuery(window).width()<480){
		$panels.removeAttr('hidden');
    } else {
		
		// add hidden stribute to first child if window size is more then 480px and none of .panels have hidden attribute
		
		var hidtest = false;
		
		// check if .panels have hidden attribute
		jQuery('.panel').each(function(){
			if(jQuery(this).is(':hidden')) {
				hidtest = true;
			}
	    });
		
		// add hidden attribute to first .panel and set .js-current class
		if(!hidtest) {
			jQuery(".panel:not(:first)").attr('hidden', true);
			jQuery('.tabs').find('.js-current').removeClass('js-current');
			jQuery('.tabs').find('.current-tab').removeClass('current-tab');
			jQuery('.tabs .tab img').css('opacity','0.7');
			jQuery('#tb-link-1 a').addClass('js-current');
			jQuery('#tb-link-1').addClass('current-tab');
			jQuery('.js-current img').css('opacity','1');
		}
		
	}
    
});



// Locations dropdown menu

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}