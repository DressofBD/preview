$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $(".header").addClass("sticky");
    } else {
        $(".header").removeClass("sticky");
    }
});

wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
});
wow.init();

$("#carousel1").owlCarousel({
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    loop: true,
    items: 1,
    nav: false,
});

if ($("#back-to-top").length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $("#back-to-top").addClass("show");
            } else {
                $("#back-to-top").removeClass("show");
            }
        };
    backToTop();
    $(window).on("scroll", function () {
        backToTop();
    });
    $("#back-to-top").on("click", function (e) {
        e.preventDefault();
        $("html,body").animate(
            {
                scrollTop: 0,
            },
            700
        );
    });
}

$(".menu-toggle").click(function () {
    $(".site-navigation").toggleClass("toggled-on");
});
