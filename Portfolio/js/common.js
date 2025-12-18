$(function () {
  // a 요소 상위 이동 방지
  $("a[href='#']").click(function (e) {
    e.preventDefault();
  });

AOS.init({
  once: false,
  duration: 1000,
});

$('#fullpage').fullpage({
  menu: '.header-nav ul',
  anchors: ['home', 'aboutme', 'work', 'contact'],

  onLeave: function(){
    jQuery('.section [data-aos]').removeClass('aos-animate');
  },

  afterLoad: function(){
    AOS.refresh();
    jQuery('.section.active [data-aos]').addClass('aos-animate');
  },

  onSlideLeave: function(){
    jQuery('.rolling-slide [data-aos], .text-slide [data-aos], .swiper-slide [data-aos]').removeClass('aos-animate');
  },

  afterSlideLoad: function(){
    AOS.refresh();
    jQuery('.rolling-slide.active [data-aos], .text-slide.active [data-aos], .swiper-slide-active [data-aos]').addClass('aos-animate');
  }
});

// 다음 섹션으로 스크롤 다운
    $('.home .scroll-down-animation-area').on('click', function() {
        if ($.fn.fullpage) {
            $.fn.fullpage.moveSectionDown();
        }
    });

  const swiper_work = new Swiper('.work .slide-area .swiper-container', {
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween: 50,
    observer: true,
    observeParents: true,
    speed: 500,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.work .swiper-pagination',
      type: 'progressbar',
      clickable: true
    },
    navigation: {
      nextEl: '.work .swiper-button-next',
      prevEl: '.work .swiper-button-prev'
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  let playing = true
  $('.work .controll-area .swiper-button-play').on('click', function () {
    $(this).toggleClass('pause');
    if (playing) {
      swiper_work.autoplay.stop();
    } else {
      swiper_work.autoplay.start();
    }
    playing = !playing;
  });

  const textSlides = $('.fade-area .text-wrap .text-slide');
  const projectName = $('.fade-area .text-wrap .text-slide .project-name');
  const projectSpec = $('.fade-area .text-wrap .text-slide .project-spec');
  const listItems = $('.list-area ul li');

  textSlides.hide().eq(0).show();
  projectName.eq(0).addClass('active');
  projectSpec.eq(0).addClass('active');
  listItems.eq(0).addClass('active');

  swiper_work.on('slideChange', function () {
    let realIndex = swiper_work.realIndex;
    textSlides.hide().eq(realIndex).show();
    projectName.removeClass('active').eq(realIndex).addClass('active');
    projectSpec.removeClass('active').eq(realIndex).addClass('active');
    listItems.removeClass('active').eq(realIndex).addClass('active');
  });

  listItems.on('click', function () {
    let index = $(this).index();
    swiper_work.slideTo(index, 500);
  });

});


