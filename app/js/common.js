
$(document).ready(function () {
	$('.mobile-menu').hide();
	$('.mobile-line').hide();
	$('.burger').click(function () {
		$(this).find('.burger__icon').toggleClass('burger__icon--active');
		$('header').find('.mobile-menu').slideToggle();
		$('.mobile-line').slideToggle();
	});
	bgSectionHeight()
	$(window).on('resize', function () {
		bgSectionHeight()
		// footerCircle()
	});
	var phoneMask = new IMask(document.getElementById('phone'), {
		mask: '+{7} (000) 000 00 00'
	});
	// $('.form-circle').ready(function () {
	// 	var svgTag = $('.form-circle')[0]
	// 	var circle = $(svgTag).find('circle')[0]
	// 	circle.setAttribute("cx", $(window).width() / 2)
	// 	circle.setAttribute("cy", -1200)
	// 	circle.setAttribute("r", $(window).width() * 1.6);
	// })
	$('#preloader').find('i').fadeOut().end().delay(200).fadeOut('slow');

});

function goTo(name) {
	$('html, body').animate({
		scrollTop: $("#" + name).offset().top
	}, 600);
}

// function footerCircle() {
// 	$('.form-circle').ready(function () {
// 		var svgTag = $('.form-circle')[0]
// 		svgTag.height = $(window).width() * 0.7;
// 		var circle = $(svgTag).find('circle')[0]
// 		circle.setAttribute("cx", $(window).width() / 2)
// 		circle.setAttribute("cy", -$(window).width())
// 		circle.setAttribute("r", $(window).width() * 1.6);
// 	})
// }

function bgSectionHeight() {
	if ($(window).height() * 0.8 > 800) {
		$('.main').css("min-height", "800px");
	} else {
		$('.main').css("min-height", $(window).height() * 0.8 + 64 + "px")
	}
}
