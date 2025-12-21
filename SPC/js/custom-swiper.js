$(function(){
    const visual_swiper = new Swiper('.visual .swiper-container', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      speed: 1000,
      loop: true,
      navigation: {
        nextEl: '.visual .swiper-container .swiper-button-next',
        prevEl: '.visual .swiper-container .swiper-button-prev',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      }
    });

    const c02_swiper1 = new Swiper('.c02 .tab01 .swiper-container', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      speed: 600,
      loop: true,
      navigation: {
            nextEl: '.c02 .tab01 .custom-swiper-btn .next',
            prevEl: '.c02 .tab01 .custom-swiper-btn .prev',
            clickable: true,
          },
      pagination: {
            el: '.c02 .tab01 .swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function (number) {
              return number < 10 ? '0' + number : number;
          },
          formatFractionTotal: function (number) {
              return number < 10 ? '0' + number : number;
          }
        }
    });

    const c02_swiper2 = new Swiper('.c02 .tab02 .swiper-container', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      speed: 600,
      loop: true,
      navigation: {
            nextEl: '.c02 .tab02 .custom-swiper-btn .next',
            prevEl: '.c02 .tab02 .custom-swiper-btn .prev',
            clickable: true,
          },
      pagination: {
          el: '.c02 .tab02 .swiper-pagination',
          type: 'fraction',
          formatFractionCurrent: function (number) {
            return number < 10 ? '0' + number : number;
        },
        formatFractionTotal: function (number) {
            return number < 10 ? '0' + number : number;
        }
      }
    });

    const c02_swiper3 = new Swiper('.c02 .tab03 .swiper-container', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      speed: 600,
      loop: true,
      navigation: {
            nextEl: '.c02 .tab03 .custom-swiper-btn .next',
            prevEl: '.c02 .tab03 .custom-swiper-btn .prev',
            clickable: true,
          },
      pagination: {
          el: '.c02 .tab03 .swiper-pagination',
          type: 'fraction',
          formatFractionCurrent: function (number) {
            return number < 10 ? '0' + number : number;
        },
        formatFractionTotal: function (number) {
            return number < 10 ? '0' + number : number;
        }
      }
    });

    const c03_swiper1 = new Swiper('.c03 .tab01 .swiper-container', {
          effect: 'fade',
          fadeEffect: {
            crossFade: true,
          },
          speed: 600,
          loop: true,
          navigation: {
            nextEl: '.c03 .tab01 .custom-swiper-btn .next',
            prevEl: '.c03 .tab01 .custom-swiper-btn .prev',
            clickable: true,
          },
          pagination: {
              el: '.c03 .tab01 .swiper-pagination',
              type: 'fraction',
              formatFractionCurrent: function (number) {
                return number < 10 ? '0' + number : number;
            },
            formatFractionTotal: function (number) {
                return number < 10 ? '0' + number : number;
            }
          },
        });

    const c03_swiper2 = new Swiper('.c03 .tab02 .swiper-container', {
          effect: 'fade',
          fadeEffect: {
            crossFade: true,
          },
          speed: 600,
          loop: true,
          navigation: {
            nextEl: '.c03 .tab02 .custom-swiper-btn .next',
            prevEl: '.c03 .tab02 .custom-swiper-btn .prev',
            clickable: true,
          },
          pagination: {
              el: '.c03 .tab02 .swiper-pagination',
              type: 'fraction',
              formatFractionCurrent: function (number) {
                return number < 10 ? '0' + number : number;
            },
            formatFractionTotal: function (number) {
                return number < 10 ? '0' + number : number;
            }
          },
        });

    const c03_swiper3 = new Swiper('.c03 .tab03 .swiper-container', {
          effect: 'fade',
          fadeEffect: {
            crossFade: true,
          },
          speed: 600,
          loop: true,
          navigation: {
            nextEl: '.c03 .tab03 .custom-swiper-btn .next',
            prevEl: '.c03 .tab03 .custom-swiper-btn .prev',
            clickable: true,
          },
          pagination: {
              el: '.c03 .tab03 .swiper-pagination',
              type: 'fraction',
              formatFractionCurrent: function (number) {
                return number < 10 ? '0' + number : number;
            },
            formatFractionTotal: function (number) {
                return number < 10 ? '0' + number : number;
            }
          },
        });

    AOS.refresh();

});