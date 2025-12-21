$(function() {
    const swiper_visual = new Swiper('.visual .swiper-container', {
        effect: 'slide',
        speed: 1000,
        loop: true,
        loopedSlides: 6,
        slidesPerView: 1,
        pagination: {
            el: '.visual .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    const swiper_promotion = new Swiper('.promotion .swiper-container', {
        effect: 'slide',
        speed: 500,
        slidesPerView: 3.3,
        spaceBetween: 15,
        centeredSlides: true,
        observer: true,
        observeParents: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.promotion .swiper-button-next',
            prevEl: '.promotion .swiper-button-prev'
        },
        breakpoints: {
            1281: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
            },
            761: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: false,
            },
        },
    });

    const swiper_event = new Swiper(".event .swiper-container", {
        effect: "cards",
        grabCursor: true,
    });
});