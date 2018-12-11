
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
	});
	var phoneMask = new IMask(document.getElementById('phone'), {
		mask: '+{7} (000) 000 00 00'
	});
	$('#preloader').find('i').fadeOut().end().delay(200).fadeOut('slow');
});

function goTo(name) {
	$('html, body').animate({
		scrollTop: $("#" + name).offset().top
	}, 600);
}

function bgSectionHeight() {
	if ($(window).height() * 0.8 > 800) {
		$('.main').css("min-height", "800px");
	} else {
		$('.main').css("min-height", $(window).height() * 0.8 + 64 + "px")
	}
}
