$(function () {
	$("#slider").slick({
		arrows: true, // 前・次のボタンを表示する
		dots: true, // ドットナビゲーションを表示する
		appendDots: $(".dots-top"), // ドットナビゲーションの生成位置を変更
		speed: 800, // スライドさせるスピード（ミリ秒）
		centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
		variableWidth: true, // スライド幅の自動計算を無効化
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});
});

//初回のみモーダルをすぐ出す判定。flagがモーダル表示のstart_open後に代入される
var access = $.cookie("access");
if (!access) {
	flag = true;
	$.cookie("access", false);
} else {
	flag = false;
}

//モーダル表示
$(".modal-open").modaal({
	start_open: flag, // ページロード時に表示するか
	overlay_close: true, //モーダル背景クリック時に閉じるか
	before_open: function () {
		// モーダルが開く前に行う動作
		$("html").css("overflow-y", "hidden"); /*縦スクロールバーを出さない*/
	},
	after_close: function () {
		// モーダルが閉じた後に行う動作
		$("html").css("overflow-y", "scroll"); /*縦スクロールバーを出す*/
	},
});
