$(function(){
  // 초기상태
  $('.c02 .tab-btn-box .txt-area button').removeClass('active').eq(0).addClass('active');
  $('.c02 .tab-btn-box .img-area img').hide().eq(0).show();
  $('.c02 .tab-con-box .change-contents').hide().eq(0).show();

  $('.c03 .tab-btn-box .txt-area button').removeClass('active').eq(0).addClass('active');
  $('.c03 .tab-con-box .change-contents').hide().eq(0).show();

  // 탭 버튼 클릭 이벤트
  $('.c02 .tab-btn-box .txt-area button').on('click', function(e) {
    e.preventDefault();
    var idx = $(this).index();

    $('.c02 .tab-btn-box .txt-area button').removeClass('active').eq(idx).addClass('active');
    $('.c02 .tab-btn-box .img-area img').hide().eq(idx).show();
    $('.c02 .tab-con-box .change-contents').hide().eq(idx).show();
  });

  $('.c03 .tab-btn-box .txt-area button').on('click', function(e) {
    e.preventDefault();
    var idx = $(this).index();

    $('.c03 .tab-btn-box .txt-area button').removeClass('active').eq(idx).addClass('active');
    $('.c03 .tab-con-box .change-contents').hide().eq(idx).show();
  });
});


