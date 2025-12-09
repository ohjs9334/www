function toggleRTL() {
  document.querySelectorAll('p, span, strong, em, a, li, h1, h2, h3, h4, h5, h6, button, label').forEach(el => {

    const hasImage = el.querySelector('img, svg, video, canvas');

    if (!hasImage && el.textContent.trim() !== '') {
      el.classList.toggle('rtl_txt');
    }
  });
}
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
    $(".inner_tab_btn").on("click", function () {

        // 탭 버튼(li)의 is-active 처리
        $(".inner_tab_item").removeClass("is-active");
        $(this).closest(".inner_tab_item").addClass("is-active");

        // 탭 패널 전환
        const target = $(this).data("target");

        $(".inner_tab_panel").removeClass("is-active");
        $("#" + target).addClass("is-active");

    });

    // 제품소개 스와이퍼 부분
    /* 썸네일 스와이퍼 (워터펌프 모델들) */
    let thumbSwiper = new Swiper(".product_thumb_swiper", {
        loop: false,
        spaceBetween: 8,
        slidesPerView: 8,
        watchSlidesProgress: true,
        breakpoints: {
            1229: { slidesPerView: 7 },
            768:  { slidesPerView: 4 },
            480:  { slidesPerView: 3 },
            0:    { slidesPerView: 2 }
        }
    });

    /* 메인 카드 스와이퍼 (워터펌프 모델들 상세) */
    let mainSwiper = new Swiper(".product_main_swiper", {
        loop: false,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        speed: 200,
        spaceBetween: 0,
        navigation: {
            nextEl: ".product_main_next",
            prevEl: ".product_main_prev"
        },
        thumbs: {
            swiper: thumbSwiper,
            // 활성 슬라이드 근처로 썸네일을 자동 스크롤
            autoScrollOffset: 1
        },
        on: {
            slideChange: function () {
                const idx = this.realIndex != null ? this.realIndex : this.activeIndex;
                thumbSwiper.slideTo(idx);
            }
        }
    });

    //modal
    // modal_practice 내 닫기 버튼 클릭 시 모달 닫기
    $(document).on("click", ".modal_practice .modal_close", function () {
        $(".modal_overlay").hide();
        $(".modal_practice").removeClass("open").hide();
    });


});