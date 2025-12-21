$(function () {
  // c01 cta 버튼 동작
  $('.c01 .cta-area .prev a').hover(
    function () {
      $(this).addClass('on');
    },
    function () {
      $(this).removeClass('on');
    }
  )

  // c02 탭메뉴 동작
  $('.c02 .tab a').on('click', function (e) {
  e.preventDefault();
  var idx = $(this).index();

  $('.c02 .tab a').removeClass('bold-blue');
  $(this).addClass('bold-blue');

  $('.c02 .tab-con .con-box').hide();
  $('.c02 .tab-con .con-box').eq(idx).show();
  
});
})


