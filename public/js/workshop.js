let thisOffset = [1, 2, 3];
$(window).on("load", function () {
  $(".lineup").each(function (i, el) {
    thisOffset[i] = $(el).offset().top + $(el).outerHeight();
    $(window).scroll(function () {
      if ($(window).scrollTop() + $(window).height() * 1.3 > thisOffset[i]) {
        $(el).addClass("slide-active");
      }
    });
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
$(".video-open").modaal({
  overlay_close: true, //モーダル背景クリック時に閉じるか
  type: "video",
  background: "#000", // 背景色
  overlay_opacity: 0.9, // 透過具合
  before_open: function () {
    // モーダルが開く前に行う動作
    $("html").css("overflow-y", "hidden"); /*縦スクロールバーを出さない*/
  },
  after_close: function () {
    // モーダルが閉じた後に行う動作
    $("html").css("overflow-y", "scroll"); /*縦スクロールバーを出す*/
  },
});
