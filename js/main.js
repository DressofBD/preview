


// $('#play-video').on('click', function(ev) {
//     $(this).hide();
//     $(".video")[0].src += "?rel=0&autoplay=1";
// });


var video = $('video')[0];
$('#play-video').click(function() {
    if( video.paused ) {
        video.play();
    }
    else {
        video.pause();
    }
});

// owl-carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:3000,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3,
    		nav:true,
    		navRewind:true
        }
    }
})



$('.counter').countUp({
	  'time': 3000,
	  'delay': 50
	});
