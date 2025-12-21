$(function(){
    // 다음 섹션으로 스크롤 다운
    $('.visual .scroll-down-animation-area').on('click', function() {
        if ($.fn.fullpage) {
            $.fn.fullpage.moveSectionDown();
        }
    });
});