function toggleRTL2(n) {
  
	
  document.querySelectorAll('p, span, strong, em, a, li, h1, h2, h3, h4, h5, h6, button, label').forEach(el => {

    const hasImage = el.querySelector('img, svg, video, canvas');

    if (!hasImage && el.textContent.trim() !== '' ) {
      el.classList.toggle('rtl_txt');
    }
  });
}

function toggleRTL(n) {

  const targets = document.querySelectorAll(
    'p, span, strong, em, a, li, h1, h2, h3, h4, h5, h6, button, label'
  );

  targets.forEach(el => {

    const hasImage = el.querySelector('img, svg, video, canvas');
    const hasText  = el.textContent.trim() !== '';

    // 이미지가 없고 텍스트가 있는 경우만 대상
    if (!hasImage && hasText) {

      if (n === 'UAE') {
        // 아랍어일 때만 RTL 적용
        el.classList.add('rtl_txt');
      } else {
        // 다른 언어면 무조건 원상복구
        el.classList.remove('rtl_txt');
      }

    }
  });

  const footer = document.querySelector('.footer');

  if (n === 'UAE') {
    // 아랍어: 푸터 상자에 footer_rtl을 붙임 (구분선 정렬, 레이아웃 반전됨)
    if (footer) footer.classList.add('footer_rtl');
  } else {
    // 그 외: footer_rtl을 떼어냄 (원상복구)
    if (footer) footer.classList.remove('footer_rtl');
  }
}

$(function(){
 
    function setPcHeader() {
        if ($(window).width() >= 1229) {
            $(".gnb").off("mouseenter mouseleave")/* 26/02/24 */
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
            $(".gnb").off("mouseenter mouseleave").parent().removeClass("active");/* 26/02/24 */
             $("header").removeClass("white");
        }
    }

    // 초기 실행
    setPcHeader();

    // 리사이즈 시 PC <-> 모바일 대응
    $(window).on("resize", setPcHeader);

    $(window).on("scroll", function() {
        // 모든 해상도에서 메인페이지라면 스크롤 체크를 하도록 수정
        if ($(".wrap").hasClass("main_wrap")) {
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


    // 공통 탭 버튼
    $(".inner_tab_btn").on("click", function () {

        // 탭 버튼(li)의 is-active 처리
        $(".inner_tab_item").removeClass("is-active");
        $(this).closest(".inner_tab_item").addClass("is-active");

        // 탭 패널 전환
        const target = $(this).data("target");

        $(".inner_tab_panel").removeClass("is-active");
        $("#" + target).addClass("is-active");

    });

    // inner tab list 터치무브
    $('.inner_tab_list').on('touchmove', function (e) {
        e.stopPropagation();
    });

});