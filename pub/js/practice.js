
// modal_practice 내 닫기 버튼 클릭 시 모달 닫기
$(document).on("click", ".modal_practice .modal_close", function () {
  $(".modal_overlay").hide();
  $(".modal_practice").removeClass("open").hide();
});