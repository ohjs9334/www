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


    // 제품소개 탭 버튼
    $(".product_tab_btn").on("click", function () {

        // 탭 버튼(li)의 is-active 처리
        $(".product_tab_item").removeClass("is-active");
        $(this).closest(".product_tab_item").addClass("is-active");

        // 탭 패널 전환
        const target = $(this).data("target");

        $(".product_tab_panel").removeClass("is-active");
        $("#" + target).addClass("is-active");

    });

    // 제품소개 스와이퍼 부분
    /* 썸네일 스와이퍼 (워터펌프 모델들) */
    let thumbSwiper = new Swiper(".product_thumb_swiper", {
        loop: true,
        spaceBetween: 8,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            1229: { slidesPerView: 6 },
            768:  { slidesPerView: 5 },
            480:  { slidesPerView: 4 },
            0:    { slidesPerView: 3 }
        }
    });

    /* 메인 카드 스와이퍼 (워터펌프 모델들 상세) */
    let mainSwiper = new Swiper(".product_main_swiper", {
        loop: true,
        spaceBetween: 0,
        navigation: {
            nextEl: ".product_main_next",
            prevEl: ".product_main_prev"
        },
        thumbs: {
            swiper: thumbSwiper
        }
    });

    //modal
    // modal_practice 내 닫기 버튼 클릭 시 모달 닫기
    $(document).on("click", ".modal_practice .modal_close", function () {
        $(".modal_overlay").hide();
        $(".modal_practice").removeClass("open").hide();
    });


});