$(function(){
    const visual_swiper = new Swiper('.visual .swiper-container', {
            effect: 'slide',
            slidesPerView: 1,
            spaceBetween: 160,
            pagination: {
                el: '.visual .swiper-pagination',
                type: 'fraction',
                clickable: true,
                renderFraction: function (current, total) {
                    return `
                        <button class="fraction-prev">〈</button>
                        <span class="${current}"></span> / <span class="${total}"></span>
                        <button class="fraction-next">〉</button>`;
                }
            },
            navigation: {
                nextEl: '.visual .swiper-button-next',
                prevEl: '.visual .swiper-button-prev',
            }
        });

        document.querySelector('.fraction-prev').addEventListener('click', () => {
            visual_swiper.slidePrev();
        });
        document.querySelector('.fraction-next').addEventListener('click', () => {
            visual_swiper.slideNext();
        });

        const c01_swiper = new Swiper('.c01 .swiper-container', {
            effect: 'slide',
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
            observer: true,
            observeParents: true,
            pagination: {
                el: '.c01 .swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
                1601: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 20,
                },
                1201: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 20,
                },
                769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
                }
            }
        });

        const c02_swiper1 = new Swiper('.c02 .page01 .swiper-container', {
            effect: 'slide',
            speed: 1000,
            slidesPerView: 1,
            centeredSlides: true,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '.c02 .page01 .swiper-button-next',
                prevEl: '.c02 .page01 .swiper-button-prev',
            },
            scrollbar:{
                el: ".c02 .page01 .swiper-scrollbar",
                draggable: true,
            },
            breakpoints: {
                1801: {
                slidesPerView: 1.4,
                spaceBetween: 50,
                },
                1701: {
                slidesPerView: 1.3,
                spaceBetween: 50,
                },
                1601: {
                slidesPerView: 1.2,
                spaceBetween: 50,
                }
            },
            on: {
                init: function () { updateScrollbarSize01(this); },
                slideChange: function () { updateScrollbarSize01(this); },
                resize: function () { updateScrollbarSize01(this); }
            }
        });

        function updateScrollbarSize01(swiper) {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const scrollbar = document.querySelector('.c02 .page01 .swiper-scrollbar');
            if (activeSlide && scrollbar) {
                const slideWidth = activeSlide.offsetWidth;
                scrollbar.style.width = slideWidth + 'px';
            }
        }

        const c02_swiper2 = new Swiper('.c02 .page02 .swiper-container', {
            effect: 'slide',
            speed: 1000,
            slidesPerView: 1,
            centeredSlides: true,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '.c02 .page02 .swiper-button-next',
                prevEl: '.c02 .page02 .swiper-button-prev',
            },
            scrollbar:{
                el: ".c02 .page02 .swiper-scrollbar",
                draggable: true,
            },
            breakpoints: {
                1801: {
                slidesPerView: 1.4,
                spaceBetween: 50,
                },
                1701: {
                slidesPerView: 1.3,
                spaceBetween: 50,
                },
                1601: {
                slidesPerView: 1.2,
                spaceBetween: 50,
                }
            },
            on: {
                init: function () { updateScrollbarSize02(this); },
                slideChange: function () { updateScrollbarSize02(this); },
                resize: function () { updateScrollbarSize02(this); }
            }
        });

        function updateScrollbarSize02(swiper) {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const scrollbar = document.querySelector('.c02 .page02 .swiper-scrollbar');
            if (activeSlide && scrollbar) {
                const slideWidth = activeSlide.offsetWidth;
                scrollbar.style.width = slideWidth + 'px';
            }
        }

        const c03_swiper = new Swiper('.c03 .swiper-container', {
            effect: 'slide',
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            pagination: {
                el: '.c03 .swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.c03 .swiper-button-next',
            },
            scrollbar: {
                el: ".c03 .swiper-scrollbar",
                draggable: true,
            }
        });

        const c04_swiper1 = new Swiper('.c04 .center-box .swiper-container', {
            effect: 'slide',
            direction: 'horizontal',
            speed: 1000,
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            allowTouchMove: false,
            pagination: {
                el: '.c04 .swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.c04 .swiper-button-next',
                prevEl: '.c04 .swiper-button-prev',
            },
            breakpoints: {
                1201: {
                speed: 2000,
                }
            }
        });

        const c04_swiper2 = new Swiper('.c04 .right-box .swiper-container', {
            effect: 'slide',
            direction: 'horizontal',
            speed: 1000,
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            pagination: {
                el: '.c04 .swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.c04 .swiper-button-next',
                prevEl: '.c04 .swiper-button-prev',
            },
            breakpoints: {
                1201: {
                effect: 'slide',
                direction: 'vertical',
                speed: 2000,
                slidesPerView: 1.5,
                centeredSlides: true,
                }
            }
        });

        c04_swiper2.controller.control = c04_swiper1;

        AOS.refresh();
    });
