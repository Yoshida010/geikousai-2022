$("#hamburgerBtn").click(function () {
	$("#hamburgerMenu").toggleClass("hamburger-active");
	$("#hamburgerBtn").toggleClass("hamburger-btn-active");
});

$('a[href*="#"]').click(function () {
	var elmHash = $(this).attr("href");
	var pos = $(elmHash).offset().top;
	$("body,html").animate({ scrollTop: pos }, 800);
	return false;
});
