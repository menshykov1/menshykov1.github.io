$(document).ready(function () {
	$('.header_burger').click(function(event) {
		$('.header_burger,.navbar').toggleClass('active');
		$('body').toggleClass('lock');
	});
});