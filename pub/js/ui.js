$(function(){
    function setPcHeader() {
        if ($(window).width() >= 1229) {
            $(".header_area").off("mouseenter mouseleave")
            .on("mouseenter", function(){
                $("header").removeClass("white");
                $("header").removeClass("white");
                $(this).parent().addClass("active");
            })
            .on("mouseleave", function(){
                $(this).parent().removeClass("active");
                // 스크롤 0일때만 다시 white 추가
                if ($(window).scrollTop() === 0 && $(".wrap").hasClass("main_wrap")) {
                    $("header").addClass("white");
                }
            });
        } else {
            // 모바일/태블릿에서는 hover 제거
            $(".header_area").off("mouseenter mouseleave").parent().removeClass("active");
             $("header").removeClass("white");
        }
    }

    // 초기 실행
    setPcHeader();

    // 리사이즈 시 PC <-> 모바일 대응
    $(window).on("resize", setPcHeader);

    // 메인페이지 헤더 스크롤 이벤트
    $(window).on("scroll", function() {
        if ($(window).width() >= 1229 && $(".wrap").hasClass("main_wrap")) {
            if ($(window).scrollTop() === 0) {
                $("header").addClass("white");
            } else {
                $("header").removeClass("white");
            }
        }
    });

    // 언어선택
    $(".lang_box .lang_btn").click(function(e){
        e.preventDefault();
        $(".lang_box .lang_list").toggle();
        e.stopPropagation();
    });


    $(".lang_list a , .lnb_util .lang a").on("click", function(e){
        $(this).parent().addClass("selected").siblings().removeClass("selected");
    });

    $(document).on("click", function(){
        $(".lang_box").removeClass("open");
        $(".lang_box .lang_list").hide();
    });

    $(".btn_menu").on("click", function(){
        $(".lnb_wrap").addClass("open");
        $("body").css("overflow", "hidden");
    });

    $(".lnb_wrap .btn_close").on("click", function(){
        $(".lnb_wrap").removeClass("open");
        $("body").css("overflow", "auto");
    });
    $(".depth1 .toggle_tit").on("click", function(){
        $(this).parent().toggleClass("active");
    });
});