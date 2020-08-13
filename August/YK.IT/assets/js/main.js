
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        $(".footer-fix-btn").addClass("fbcome");
    } else {
        $(".footer-fix-btn").removeClass("fbcome");
    }
});