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

// 高さ計測
const setFillHeight = () => {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty("--vh", `${vh}px`);
};

// 画面のサイズ変動があった時に高さを再計算する
window.addEventListener("resize", setFillHeight);

// 初期化
setFillHeight();
