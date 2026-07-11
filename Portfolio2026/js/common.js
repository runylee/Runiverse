document.addEventListener('DOMContentLoaded', () => {
    // 임시 링크 기본 동작 방지
    document.querySelectorAll("a[href='#']:not(.side-nav__link)").forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });

    // AOS 초기화
    AOS.init({
        once: false,
        offset: 100,
        threshold: 1,
    });

    // rolling 애니메이션 슬라이드 복제
    document.querySelectorAll('.rolling').forEach((rolling) => {
        const slide = rolling.querySelector('.rolling__slide');
        rolling.appendChild(slide.cloneNode(true));
    });

    // side nav 클릭 이벤트
    document.querySelectorAll('.side-nav__link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetClass = link.getAttribute('data-scroll');
            const targetSection = document.querySelector(`.${targetClass}`);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });

                document.querySelectorAll('.side-nav__link').forEach(link => {
                    link.classList.remove('active');
                });

                link.classList.add('active');
            }
        });
    });
});

// side nav 스크롤 이벤트
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;

    document.querySelectorAll('section').forEach((section) => {
        const sectionClass = section.className.split(' ')[0];
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.side-nav__link').forEach((link) => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector(`[data-scroll="${sectionClass}"]`);

            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});