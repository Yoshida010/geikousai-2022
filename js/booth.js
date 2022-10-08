function zoomInAnime(){

    $('.zoomInTrigger').each(function(){ //fadeInTriggerというクラス名が
        var elemPos = $(this).offset().top+20;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('zoomIn');// 画面内に入ったらfadeInというクラス名を追記
        }else{
        $(this).removeClass('zoomIn');// 画面外に出たらfadeInというクラス名を外す
        }
        });
}

function fadeRightAnime(){

    $('.RightTrigger').each(function(){ //fadeRightTriggerというクラス名が
        var elemPos = $(this).offset().top+20;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeRight');// 画面内に入ったらfadeRightというクラス名を追記
        }else{
            $(this).removeClass('fadeRight');// 画面外に出たらfadeRightというクラス名を外す
        }
        });
}

$(window).scroll(function(){
    zoomInAnime();
    fadeRightAnime();/* アニメーション用の関数を呼ぶ*/
  });