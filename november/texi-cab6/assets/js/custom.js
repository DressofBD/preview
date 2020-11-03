$(function() {
	"use strict";
	var theForm
	$('form.aSubmit').validator().on('submit', function(e) {
		theForm = $(this);
		if (e.isDefaultPrevented()) {
			alert('Please fill out the Quick Quote form');
		} else {
			$('#loader').fadeIn();
			$.ajax({
				url: $(this).attr('action'),
				method: 'post',
				data: $(this).serialize()
			}).done(function(ret) {
				$('#loader').fadeOut();
				if (ret == "Message sent!") {
					theForm.find('.response.success').fadeIn();
				} else {
					theForm.find('.response.error').fadeIn();
				}
				setTimeout(function() {
					theForm.find('.response').fadeOut()
				}, 7000)
			})
		}
		return false;
	})
	$('#button_requestQuote').on('click', function() {
		$('html, body').animate({
			scrollTop: $("#quickQuoteForm_wrapper").offset().top
		}, 2000);
	});
})