$(document).ready(function () {
    var shrinkHeader = 150;
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $(".mega-menu").addClass("desktopTopFixed");
        } else {
            $(".mega-menu").removeClass("desktopTopFixed");
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset;
    }

    $(".menu-mobile-collapse-trigger").click(function () {
        $(".menu-links").toggleClass("d-block");
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
            $("#back-to-top").addClass("d-block");
        } else {
            $("#back-to-top").removeClass("d-block");
        }
    });


	$("#back-to-top").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});



});


// revolution slider
!(function (e) {
  "use strict";
  var o = jQuery;
  o(document).ready(function () {
      void 0 == o("#rev_slider").revolution
          ? revslider_showDoubleJqueryError("#rev_slider")
          : o("#rev_slider")
                .show()
                .revolution({
                    sliderType: "standard",
                    sliderLayout: "fullwidth",
                    dottedOverlay: "none",
                    delay: 9e3,
                    navigation: {
                        keyboardNavigation: "off",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        mouseScrollReverse: "default",
                        onHoverStop: "off",
                        arrows: {
                            style: "gyges",
                            enable: !0,
                            hide_onmobile: !1,
                            hide_onleave: !1,
                            tmp: "",
                            left: { h_align: "left", v_align: "center", h_offset: 20, v_offset: 0 },
                            right: { h_align: "right", v_align: "center", h_offset: 20, v_offset: 0 },
                        },
                    },
                    visibilityLevels: [1240, 1024, 778, 480],
                    gridwidth: 1920,
                    gridheight: 900,
                    lazyType: "none",
                    parallax: { type: "mouse", origo: "enterpoint", speed: 400, levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 20, 55], type: "mouse" },
                    shadow: 0,
                    spinner: "spinner3",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    disableProgressBar: "on",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: !1,
                    fallbacks: { simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: !1 },
                });
  });
})(jQuery);





// About page accordion
var POTENZA = {};
(function ($) {
    "use strict";
    var $window = $(window),
        $document = $(document),
        $body = $("body"),
        $countdownTimer = $(".countdown"),
        $counter = $(".counter-main");
    $.fn.exists = function () {
        return this.length > 0;
    };

    POTENZA.accordion = function () {
        var $acpanel = $(".accordion .acd-group > .acd-des"),
            $acsnav = $(".accordion .acd-group > .acd-heading");
        $acpanel.hide().first().slideDown("easeOutExpo");
        $acsnav.first().addClass("acd-active");
        $acsnav.on("click", function () {
            var $this = $(this).next(".acd-des");
            $acsnav.parent().removeClass("acd-active");
            $(this).parent().addClass("acd-active");
            $acpanel.not($this).slideUp("easeInExpo");
            $(this).next().slideDown("easeOutExpo");
            return false;
        });
    };

    $document.ready(function () {
         POTENZA.accordion();
    });
})(jQuery);