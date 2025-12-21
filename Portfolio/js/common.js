$(function () {
  // a 요소 상위 이동 방지
  $("a[href='#']").click(function (e) {
    e.preventDefault();
  });

AOS.init({
  once: false,
  offset: 100,
  threshold: 1,
});

});





