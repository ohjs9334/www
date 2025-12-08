$(document).ready(function () {

  $(".product_tab_btn").on("click", function () {

    // 탭 버튼(li)의 is-active 처리
    $(".product_tab_item").removeClass("is-active");
    $(this).closest(".product_tab_item").addClass("is-active");

    // 탭 패널 전환
    const target = $(this).data("target");

    $(".product_tab_panel").removeClass("is-active");
    $("#" + target).addClass("is-active");

  });

  //
  // ./js/products.js

  $(function () {

    /* 탭 버튼 활성화 */
    $(".product_tab_btn").on("click", function () {
      // li 활성화
      $(".product_tab_item").removeClass("is-active");
      $(this).closest(".product_tab_item").addClass("is-active");

      // 패널 전환
      let target = $(this).data("target"); // 예: "tab-waterpump"
      $(".product_tab_panel").removeClass("is-active");
      $("#" + target).addClass("is-active");
    });

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

  });

});