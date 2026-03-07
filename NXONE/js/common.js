document.addEventListener('DOMContentLoaded', () => {
    // header 스크롤 애니메이션
    let lastScroll = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // 스크롤 내림
        header.classList.add('is-hidden');
    } else {
        // 스크롤 올림
        header.classList.remove('is-hidden');
        header.classList.add('is-fixed');
    }

    if (currentScroll === 0) {
        header.classList.remove('is-fixed');
    }

    lastScroll = currentScroll;
    });

    // mobile nav 토글
    const mobileNav = document.querySelector('.mobile-nav');
    const openBtn = document.querySelector('.header__mobile-nav-toggle');
    const closeBtn = document.querySelector('.mobile-nav-close');
    const modalOverlay = document.querySelector('.mobile-nav-overlay');

    // 열기
    openBtn.addEventListener('click', () => {
    mobileNav.classList.add('is-active');
    modalOverlay.classList.add('is-active');
    });

    // 닫기
    closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('is-active');
    modalOverlay.classList.remove('is-active');
    });

    // numbers 섹션 카운트업 애니메이션
    const section = document.querySelector(".numbers");
    const odometers = document.querySelectorAll(".odometer");
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
        // 화면에 들어왔을 때
        odometers.forEach(el => {
            el.innerHTML = 0; // 0으로 리셋
            setTimeout(() => {
            el.innerHTML = el.dataset.value;
            }, 50);
        });
        } else {
        // 화면에서 벗어났을 때
        odometers.forEach(el => {
            el.innerHTML = 0;
        });
        }
    });
    }, {
    threshold: 0.3 // 30% 보이면 실행
    });

    observer.observe(section);

    // credentials 섹션 아코디언 싱글오픈
    const items = document.querySelectorAll(".credentials__accordion-item");

    items.forEach(item => {
        const trigger = item.querySelector(".credentials__accordion-trigger");
        const panel = item.querySelector(".credentials__accordion-panel");

        trigger.addEventListener("click", () => {

            items.forEach(i => {
            const p = i.querySelector(".credentials__accordion-panel");

            if (i !== item) {
                i.classList.remove("is-open");
                p.classList.remove("is-animating");
                p.style.height = "0px";
            }
            });

            item.classList.add("is-open");
            panel.classList.add("is-animating");
            panel.style.height = "0px";

            requestAnimationFrame(() => {
                panel.style.height = panel.scrollHeight + "px";
            });
        });

        panel.addEventListener("transitionend", () => {
            if (item.classList.contains("is-open")) {
                panel.style.height = "auto";
            }
        });
    });
})
