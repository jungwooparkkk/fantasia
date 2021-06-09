$(document).ready(function(){
    //검색
    let srch = $("header .util .riUtil .srchArea"),
        search = $("header .srchArea"),
        icoClose = $(".icoClose");

    srch.click(function(){
        srchArea.slideDown();
    });    
    srch.click(function(){
        srchArea.slideUp();
    });




    //언어선택
    let langBtn = $(".lang dt"),
        langList = $(".lang dd");
        langBtn.click(function(){
            /* $(this).toggleClass("on");
            langList.toggle(); */

            if($(this).hasClass("on")){
                $(this).removeClass("on");
                langList.fadeOut();
            }else{
                $(this).addClass("on");
                langList.fadeIn();
            }
        });

    //gnb
    let Dep1 = $("#gnb > li");
    Dep1.mouseenter(function(){
        $(this).addClass("on");
        $(this).children(".depth2").fadeIn();
    });
    Dep1.mouseleave(function(){
        $(this).removeClass("on");
        $(this).children(".depth2").fadeOut();
    });



    //메인비주얼 swiper
    var swiper = new Swiper("#mainVisual", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

    //할인정보 tap
    let benefitTabMenu = $(".benefitsArea .tabWrap .tab a"),
        itemList = $(".benefitsArea .tabWrap .itemList");

        benefitTabMenu.click(function(e){
        e.preventDefault();

        let tabCon = $(this).attr("href");
        itemList.hide();
        $(tabCon).show();

        benefitTabMenu.removeClass("on");
        $(this).addClass("on");


    });

    //어트랙션 tap
    let atrractabMenu = $(".attractionArea .tabWrap .tab a"),
    atracItemList = $(".attractionArea .tabWrap .itemList");

    atrractabMenu.click(function(e){
        e.preventDefault();

        let atrractabCon2 = $(this).attr("href");
        atracItemList.hide();
        $(atrractabCon2).show();

        atrractabMenu.removeClass("on");
        $(this).addClass("on");


    });
});