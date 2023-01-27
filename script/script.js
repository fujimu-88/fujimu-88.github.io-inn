/** ローディングアニーメーション */

$(function(){
    if (sessionStorage.getItem('access')) {
        //2回目以降アクセス時の処理
        $('.loader').fadeOut(0);
        
    } else {
        //初回アクセス時の処理
        sessionStorage.setItem('access',0)
            // タイマー処理
            // ローダー終了
                setTimeout(function () {
                    $('.loader').fadeOut(700);
                }, 3000)
        
    };

});


//windowサイズ768以下で固定メニューの動作　関数化
function smartPhoneMenu(){
    $(window).scroll(function(){
        var sHeight = $(window).scrollTop();
            if(sHeight>250){
                $(".nav_sub:not(:animated)").animate({
                    "opacity":"1"
                }).fadeIn(300);
            }else{
                $(".nav_sub:not(:animated)").fadeOut(350);
            };
    });
};

//windowサイズ768px以上でトップへ戻るの動作　関数化
function tabletUp(){
    $(window).scroll(function(){
        var sHeight = $(window).scrollTop();
            if(sHeight>500){
                $("#up:not(:animated)").animate({
                    "opacity":"0.6"
                }).fadeIn(400);
            }else{
                $("#up:not(:animated)").fadeOut(400);
            };
    });
    $(function(){
        $("#up").mouseover(function(){
            $("#up").css({
                "opacity":"1"
            });
        });
        $("#up").mouseleave(function(){
            $("#up").css({
                "opacity":"0.6"
            });
        });
    });
}



//windowサイズ768以下でお知らせ一覧の.next,.prev動作　関数化
function newsListSmartPhone(){
    $(".next").click(function(){
        $("#news_list .pageWrap").animate({
            "margin-left" : parseInt($("#news_list .pageWrap").css("margin-left"))-340+"px"
        },400);
    })
    
    $(".prev").click(function(){
        $("#news_list .pageWrap").animate({
            "margin-left" : parseInt($("#news_list .pageWrap").css("margin-left"))+340+"px"
        },400);
    });
};

//windowサイズ768px以上でお知らせ一覧の.next,.prev動作　関数化
function newsListTablet(){
    $(".next").click(function(){
        $("#news_list .pageWrap").animate({
            "margin-left" : parseInt($("#news_list .pageWrap").css("margin-left"))-420+"px"
        },400);
    })
    
    $(".prev").click(function(){
        $("#news_list .pageWrap").animate({
            "margin-left" : parseInt($("#news_list .pageWrap").css("margin-left"))+420+"px"
        },400);
    });
};


/*ヘッダー画像　windowサイズを変更したときpcサイズでもスマホ用画像に変わらないように*/
$(window).ready(function () {
    // 実行したい処理
    var w = $(window).width();
    if( w <= 768){
        //横幅768px未満の時
        $("#slide img").each(function(){
            $(this).attr("src",$(this).attr("src").replace("_tb","_sp"));
        });
        
        //windowサイズ768以下で固定メニューの動作　関数
        smartPhoneMenu();

        //windowサイズ768以下でお知らせ一覧の.next,.prev動作　関数
        newsListSmartPhone();

    }else if( w >= 768){
        //横幅768px以上の時
        
        /*ヘッダー画像　画面サイズが変わるとスマホ用とタブレット用の画像が変わる*/
        $("#slide img").each(function(){
            $(this).attr("src",$(this).attr("src").replace("_sp","_tb"));
        });
        
        //windowサイズ768px以上でトップへ戻るの動作　関数
        tabletUp();

        //windowサイズ768以以上でお知らせ一覧の.next,.prev動作　関数
        newsListTablet();

    };
});

//windowサイズで動作が変わる
$(window).resize(function () {
    // 実行したい処理
    var w = $(window).width();
    if( w <= 768){
        //news.htmlのお知らせリストのnextとprevをクリックしたとき


        //windowサイズ768以下で固定メニューの動作　関数
        smartPhoneMenu();

        //windowサイズ768以下でお知らせ一覧の.next,.prev動作　関数
        newsListSmartPhone();

    }else if( w >= 768){
        

    //windowサイズ768px以上でトップへ戻るの動作　関数
    tabletUp();

    //windowサイズ768以以上でお知らせ一覧の.next,.prev動作　関数
    newsListTablet();

    }
})

/*ヘッダー画像のスライドショー*/
$(function(){
    //ページの初期化
    var page=0;

    //イメージの数を最後のページ数として変数へ（0からカウントに統一するため-1）
    var lastPage =parseInt($("#slide img").length-1);

    //最初に全部のイメージを非表示
        $("#slide img").css("display","none");

    //初期ページを表示（page=0からスタート）
            $("#slide img").eq(page).css("display","block");

    //ページ切換用、自作関数作成
    function changePage(){
                            $("#slide img").fadeOut(1600);
                            $("#slide img").eq(page).fadeIn(1600);
    };

    //タイマーでイメージ切換設定
    var Timer;
    function startTimer(){
    Timer =setInterval(function(){
                if(page === lastPage){
                  //ラストページに行ったらページ0に戻る
                            page = 0;
                            changePage();
                }else{
                       //ラストページになるまで加算
                            page ++;
                            changePage();
                };
        },5000);
    }
    //タイマースタート
    startTimer();

});

//ヘッダー画像スライドショー終了

/*コンテンツ画像　可視化領域になると透明度がなくなる*/

$(window).on('load', function(){
    $(function(){
        $(".sub_opacity_text:not(:animated)").animate({
            "opacity":"1"
        },2500);
    });
});

$(function(){
    
    $(window).scroll(function(){
        $(".opacity_text").each(function fadeIn(){
            //.offset() 最上部から.fadeinの距離を取得
            var tHeight = $(this).offset().top;
            //.scrllTop() スクロールした高さを取得
            var sHeight = $(window).scrollTop();
            //.height() ウィンドウの高さを取得
            var wHeight = $(window).height();
            
            if(sHeight > tHeight - wHeight + 200){
                $(function(){
                    $(".opacity_text:not(:animated)").animate({
                        "opacity":"1"
                    },2500);
                });
            };
        });

        $("#fadein1").each(function fadeIn(){
            //.offset() 最上部から.fadeinの距離を取得
            var tHeight = $(this).offset().top;
            //.scrllTop() スクロールした高さを取得
            var sHeight = $(window).scrollTop();
            //.height() ウィンドウの高さを取得
            var wHeight = $(window).height();
            
            if(sHeight > tHeight - wHeight + 200){
                $(function(){
                    $("#fadein1:not(:animated)").animate({
                        "opacity":"1"
                    },2500);
                });
            };
        });

        $("#fadein2").each(function fadeIn(){
            var tHeight = $(this).offset().top;
            var sHeight = $(window).scrollTop();
            var wHeight = $(window).height();
            
            if(sHeight > tHeight - wHeight + 250){
                $(function(){
                    $("#fadein2:not(:animated)").animate({
                        "opacity":"1"
                    },2500);
                });
            };
        });
        $("#fadein3").each(function fadeIn(){
            var tHeight = $(this).offset().top;
            var sHeight = $(window).scrollTop();
            var wHeight = $(window).height();
            
            if(sHeight > tHeight - wHeight + 250){
                $(function(){
                    $("#fadein3:not(:animated)").animate({
                        "opacity":"1"
                    },2500);
                });
            };
        });
    });
});
//コンテンツ画像透過率UP終了


//news_indovodual/html#newsXをクリックしたとき
$(function(){
        var hash = $(location).attr('hash');
        if (hash.indexOf("#news")>=0) {
                // #newsがマッチした場合
            $(function(){
                $(hash).css({
                    "display":"block"
                });
                
            });
            //ページトップで表示する
            var target = ($("h1").offset().top);
            $('html,body').animate({scrollTop: target}, 0);
        }
})

//inews_indovodual/html#newsをクリックしたとき終了


//news.htmlのお知らせリストのnextとprevをクリックしたとき

    $(".next").click(function(){
        $("#news_list .pageWrap").animate({
            "margin-left" : parseInt($("#news_list .pageWrap").css("margin-left"))-340+"px"
        },400);
    })
    
    $(".prev").click(function(){
        $("#news_list .pageWrap").animate({
            "margin-left" : parseInt($("#news_list .pageWrap").css("margin-left"))+340+"px"
        },400);
    })

//news.htmlのお知らせリストのnextとprev終了
