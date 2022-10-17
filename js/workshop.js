let thisOffset = [1, 2, 3];
$(window).on("load", function () {
	$(".lineup").each(function (i, el) {
		thisOffset[i] = $(el).offset().top + $(el).outerHeight();
		console.log(el);
		$(window).scroll(function () {
			if ($(window).scrollTop() + $(window).height() * 1.3 > thisOffset[i]) {
				$(el).addClass("slide-active");
			}
		});
	});
});
