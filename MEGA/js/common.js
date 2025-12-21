$(function () {
  // a 요소 상위 이동 방지
  $("a[href='#']").click(function (e) {
    e.preventDefault()
  })

  // header nav 동작
  $('#header .header-nav .all-dep-wrap').mouseover(function(){
    $('#header .header-nav').addClass('active');
    $('#header .header-nav .two-dep').stop(true,true);
    $('#header .header-nav .two-dep').slideDown(300);
  })

  $('#header').mouseleave(function(){
    $('#header .header-nav').removeClass('active');
    $('#header .header-nav .two-dep').stop(true,true);
    $('#header .header-nav .two-dep').slideUp(300);
  })

  // 모달창 동작
  $('.tm-modal').on('click', function(){
    $('.tm-modal-content').addClass('active');
  });

  $('.tm-modal-content .close').on('click', function(){
    $('.tm-modal-content').removeClass('active');
  });

  $('.tm-modal-content .one-dep p').on('click', function(){
    let index = $(this).closest('.one-dep').index();
    $('.tm-modal-content .one-dep').stop(true, true);
    $('.tm-modal-content .one-dep').eq(index).toggleClass('active');
    $('.tm-modal-content .two-dep').stop(true, true);
    $('.tm-modal-content .two-dep').eq(index).slideToggle(300);
  });

  // 사이드바 반응형 동작
  function bindSideBarToggle() {
    const winW = $(window).width();

    if (winW >= 1281) {
      $('#side-franchise-info ul li:not(.tm-side-bar-btn)').show();
      $('.tm-side-bar-btn').removeClass('active');
      $('.tm-side-bar-btn').off('click.sideBar');
    } else {
      $('#side-franchise-info ul li:not(.tm-side-bar-btn)').hide();
      $('.tm-side-bar-btn').off('click.sideBar').on('click.sideBar', function(){
        $(this).toggleClass('active');
        $('#side-franchise-info ul li:not(.tm-side-bar-btn)').fadeToggle(500);
      });
    }
  }

  bindSideBarToggle();

  $(window).on('resize', function(){
    bindSideBarToggle();
  });

  // AOS 초기화
  AOS.init({
    duration: 1000,
    once: true
  });

$('#fullpage').fullpage({
  menu: '.fullpage-nav',
  anchors: ['visual', 'promotion', 'franchise', 'brandstory', 'event', 'footer'],

  afterLoad: function(anchorLink, index){
    // header 스타일 변화
    if ($('.section.visual').hasClass('active')) {
      $('#header').removeClass('active');
    } else {
      $('#header').addClass('active');
    }

    $('.section.active [data-aos]').addClass('aos-animate');

    // countUp 애니메이션 동작
    if (anchorLink === 'franchise' && index === 3 && window.franchiseCountUp) {
      window.franchiseCountUp.reset();
      window.franchiseCountUp.start();
    }
  },

  afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
    $('.swiper-slide-active [data-aos]').addClass('aos-animate');
  },

  onSlideLeave: function(anchorLink, index, slideIndex, direction){
    $('.swiper-slide [data-aos]').removeClass('aos-animate');
  },

  onLeave: function(index, nextIndex, direction){
    $('.section [data-aos]').removeClass('aos-animate');
  }
});

})


