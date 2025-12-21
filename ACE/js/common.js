$(function () {
  // a 요소 상위 이동 방지
  $("a[href='#']").click(function (e) {
    e.preventDefault();
  });

  $("header .tm-left-menu").click(function () {
    alert('준비 중 입니다 :)');
  });

  // aos 라이브러리 스크롤 초기화
  AOS.init();
  AOS.refresh();

  // header 스크롤 동작
  let lastScroll = 0;
  const $header = $('.fixed-header');

  $(window).on('scroll', function () {
    const currScroll = $(this).scrollTop();

    if (currScroll > lastScroll && currScroll > 100) {
      // 아래로 스크롤: 헤더 숨김
      $header.addClass('hide');
    } else if (currScroll < lastScroll) {
      // 위로 스크롤: 헤더 노출
      $header.removeClass('hide');
    }
    lastScroll = currScroll;
  });

  // header nav 동작
  $('header nav > ul').mouseover(function () {
    $('header').addClass('active');
    $('header h1').hide();
  })

  $('header nav > ul').mouseleave(function () {
    $('header').removeClass('active');
    $('header h1').show();
  })

  // header 왼쪽영역 modal 동작
  $('header .icons .menu').on('click', function () {
    $('header .menu-modal').addClass('active');
    $('body').addClass('modal-open');
  });

  $('header .menu-modal .close').on('click', function () {
    $('header .menu-modal').removeClass('active');
    $('body').removeClass('modal-open');
  });

  // 해상도별 modal 동작
  function bindMenuEvent() {
    const isMobile = $(window).width() <= 768;

    // 초기상태 - 이벤트 모두 제거
    $('header .menu-modal .left-area .one-dep').off('mouseenter mouseover click');
    $('header .menu-modal .left-area .menu').off('mouseleave');

    if (isMobile) {
      // 768 이하: 클릭, 토글 동작
      $('header .menu-modal .left-area .one-dep').on('click', function () {        
        const $this = $(this);
        const $menu = $this.closest('.menu');

        // two-dep 열리기 전
        if ($this.hasClass('active')) {
          $this.removeClass('active');
          $this.children('span').removeClass('active');
          $menu.find('.two-dep').stop(true, true).slideUp(300);
          
          setTimeout(() => {
            const $lastFixedMenu = $('header .menu-modal .left-area .menu.fixed').last();
            if ($lastFixedMenu.length) {
              $lastFixedMenu.find('.one-dep').addClass('fixed');
            }
          }, 100);
          
          // two-dep 열린 후
        } else {
          $('header .menu-modal .left-area .menu.fixed .one-dep').removeClass('fixed');
          $('header .menu-modal .left-area .one-dep').removeClass('active');
          $('header .menu-modal .left-area .one-dep > span').removeClass('active');
          $('header .menu-modal .left-area .two-dep').stop(true, true).slideUp(0);
          
          $this.addClass('active');
          $this.children('span').addClass('active');
          $menu.find('.two-dep').stop(true, true).slideDown(300);
        }
      });

    } else {
      // 769 이상: hover 동작
      $('header .menu-modal .left-area .one-dep').on('mouseover', function () {
        $('header .menu-modal .left-area .one-dep').removeClass('fixed');
        $(this).addClass('active');
        $(this).children('span').addClass('active');
        $(this).closest('.menu').find('.two-dep')
          .stop(true, true).delay(300).slideDown(300);
      });

      $('header .menu-modal .left-area .menu').on('mouseleave', function () {
        $('header .menu-modal .left-area .menu.fixed').find('.one-dep').addClass('fixed');
        $(this).find('.one-dep').removeClass('active');
        $(this).find('.one-dep > span').removeClass('active');
        $(this).find('.two-dep').stop(true, true).slideUp(0);
      });
    }
  }

  // 초기 실행
  bindMenuEvent();
  $(window).on('resize', bindMenuEvent);

  // 왼쪽 영역 메뉴별 이미지 교체
  const $spans = $('header .menu-modal .left-area .image-box span');
  let currentIdx = 0;

  $spans.removeClass('active').eq(currentIdx).addClass('active');

  $('header .menu-modal .left-area .text-box .one-dep').mouseover(function () {
    const idx = $(this).parent('.menu').index();
    if (idx === currentIdx) return;

    currentIdx = idx;
    $spans.removeClass('active').eq(idx).addClass('active');
  });

  $('header .menu-modal .left-area .text-box .menu').mouseleave(function () {
    if (currentIdx === 0) return;
    currentIdx = 0;
    $spans.removeClass('active').eq(0).addClass('active');
  });

  // footer family site 동작
  $('footer .family-site').on('click', function () {
    $('footer .family-site-list').show();
  });

  $('footer .family-site-list img').on('click', function () {
    $('footer .family-site-list').hide();
  });
})
