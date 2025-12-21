$(function () {
  // a 요소 상위 이동 방지
  $("a[href='#']").click(function (e) {
    e.preventDefault()
  })

  //header 네비게이션 동작
  $('header nav').hover(
    function () {
      $('.nav-bg').addClass('active');
      $('header nav .sub-menu').show();
    },
    function () {
      $('.nav-bg').removeClass('active');
      $('header nav .sub-menu').hide();
    }
  )

  $('header .nav-bg').hover(
    function () {
      $('.nav-bg').addClass('active');
      $('header nav .sub-menu').show();
    },
    function () {
      $('.nav-bg').removeClass('active');
      $('header nav .sub-menu').hide();
    }
  )

  $('header .sub-menu').hover(
    function () {
      $('.nav-bg').addClass('active');
      $('header nav .sub-menu').show();
    },
    function () {
      $('.nav-bg').removeClass('active');
      $('header nav .sub-menu').hide();
    }
  )

  //header 네비게이션 하위메뉴 호버 효과
  $('header nav .sub-menu li a').hover(
    function () {
      //mouseover 하면, a 전체에 off 클래스 주고, this = 선택된 a에는 off 클래스 제거.
      $('header nav .sub-menu li a').addClass('off');
      $(this).removeClass('off');
    },
    function () {
      //mouseleave 하면, a 전체에 off 클래스 제거.
      $('header nav .sub-menu li a').removeClass('off');
    }
  )

  //header 글로벌 아이콘 호버 효과
  const headerItem = $('header h1, header nav, header .careers');
  $('header .header-right .lang').hover(
    function () {
      headerItem.css('opacity', '0.5');
    },
    function () {
      headerItem.css('opacity', '1');
    }
  )

  //header 모달창 버튼 클릭 이벤트
  $('header .modal-menu-btn').on('click', function(){
    $('header .modal-menu').toggleClass('active');
  });

  // header 모달창 메뉴 클릭 이벤트
  $('header .modal-menu .top-menu').on('click', function() {
    $('header .modal-menu .top-menu').not(this).removeClass('active');
    $('header .modal-menu .top-menu').not(this).find('.arrow').removeClass('active');
    $('header .modal-menu .top-menu').not(this).closest('.menu').find('.sub-menu').stop(true, true).slideUp();

    $(this).toggleClass('active');
    $(this).find('.arrow').toggleClass('active');
    $(this).closest('.menu').find('.sub-menu').stop(true, true).slideToggle();
  });

  //header 높이 계산 후 visual 자동 배치
  function adjustVisualMargin () {
    var headerHeight = $('header').outerHeight();
    $('.visual').css('margin-top', headerHeight + 'px');
  }
  adjustVisualMargin();
  $(window).resize(function () {
    adjustVisualMargin();
  });

  //footer 패밀리사이트 클릭 효과
  $('footer .family-site button').on('click', function (e) {
    $(this).toggleClass('active');
    $('footer .family-site-list').toggle();
  });
});
