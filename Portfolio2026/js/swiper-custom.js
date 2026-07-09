document.addEventListener('DOMContentLoaded', () => {
    const swipers = [];

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
