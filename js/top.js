$(function () {
	$("#slider").slick({
		arrows: true,
		dots: true,
		appendDots: $(".dots-top"),
		speed: 800,
		centerMode: true,
		variableWidth: true, // スライド幅の自動計算を無効化
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});
});

var access = $.cookie("access");
if (!access) {
	flag = true;
	$.cookie("access", false);
} else {
	flag = false;
}

//モーダル表示
$(".modal-open").modaal({
	overlay_close: true,
	before_open: function () {
		$("html").css("overflow-y", "hidden");
	},
	after_close: function () {
		$("html").css("overflow-y", "scroll");
	},
});

var modalScroll = setInterval(function () {
	var val = $(".modaal-container").scrollTop();
	if (val > 0) {
		clearInterval(modalScroll);
		$(".modaal-container").scrollTop(0);
	}
}, 0);
