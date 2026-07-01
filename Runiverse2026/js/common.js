document.addEventListener('DOMContentLoaded', function() {
  // 임시링크 기본동작 막기
  document.querySelectorAll("a[href='#']:not(.side-nav__link)").forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
    });
  });

  // aos 초기화
  AOS.init({
    once: false,
    offset: 100,
    threshold: 1,
  });

  // side-nav 클릭 이벤트
  document.querySelectorAll('.side-nav__link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetClass = link.getAttribute('data-scroll');
      const targetSection = document.querySelector(`.${targetClass}`);
      
      if (targetSection) {
        targetSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
        
        document.querySelectorAll('.side-nav__link').forEach(l => {
          l.classList.remove('active');
        });
        link.classList.add('active');
      }
    });
  });
});

// side-nav 스크롤 이벤트
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 100;
  
  document.querySelectorAll('section').forEach(section => {
    const sectionClass = section.className.split(' ')[0];
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      document.querySelectorAll('.side-nav__link').forEach(link => {
        link.classList.remove('active');
      });
      const activeLink = document.querySelector(`[data-scroll="${sectionClass}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// project 섹션 슬라이드
document.addEventListener('DOMContentLoaded', () => {
    const swipers = [];

    // Swiper 생성
    document.querySelectorAll('.project__item').forEach((item) => {
        const swiperEl = item.querySelector('.project__media.swiper');
        if (!swiperEl) return;

        const swiper = new Swiper(swiperEl, {
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            speed: 1000,
            pagination: {
                el: swiperEl.querySelector('.swiper-pagination'),
                clickable: true,
            },
        });

        // 처음엔 전부 정지
        swiper.autoplay.stop();
        swipers.push({ item, swiper });
    });

    function updateActiveSwiper() {
        const stickyTop =
            parseFloat(
                getComputedStyle(document.documentElement)
                    .getPropertyValue('--header-height')
            ) - 2;

        let active = null;

        swipers.forEach((obj) => {
            const rect = obj.item.getBoundingClientRect();

            // sticky 위치에 도달한 마지막 카드만 활성
            if (rect.top <= stickyTop && rect.bottom > stickyTop) {
                active = obj;
            }
        });

        swipers.forEach((obj) => {
            if (obj === active) {
                if (!obj.swiper.autoplay.running) {
                    obj.swiper.autoplay.start();
                }
            } else {
                if (obj.swiper.autoplay.running) {
                    obj.swiper.autoplay.stop();
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveSwiper, { passive: true });
    window.addEventListener('resize', updateActiveSwiper);

    updateActiveSwiper();
});

// 무한 롤링 슬라이드 복제
document.querySelectorAll('.rolling').forEach((rolling) => {
    const slide = rolling.querySelector('.rolling__slide');
    rolling.appendChild(slide.cloneNode(true));
});