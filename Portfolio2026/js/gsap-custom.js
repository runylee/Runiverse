document.addEventListener('DOMContentLoaded', () => {
    initHeroTitle();
    initGalaxyTrail();
});

function initHeroTitle() {
    document.querySelectorAll('.hero__text').forEach((text) => {
        text.innerHTML = text.textContent
            .split('')
            .map((char) => `<span class="hero__char">${char}</span>`)
            .join('');
    });

    gsap.set('.hero__char', {
        display: 'inline-block'
    });

    gsap.from('.hero__char', {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power4.out'
    });
}

function initGalaxyTrail() {
    const hero = document.querySelector('.hero');
    const cursor = document.querySelector('.hero__cursor');
    const container = document.querySelector('.hero__stars');

    if (!hero || !cursor || !container) return;

    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
        return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let isInsideHero = false;
    let isMoving = false;
    let moveTimeout;

    hero.addEventListener('mouseenter', () => {
        isInsideHero = true;
        gsap.set(cursor, { opacity: 1 });
    });

    hero.addEventListener('mousemove', (e) => {
        if (!isInsideHero) return;

        mouseX = e.clientX;
        mouseY = e.clientY;

        gsap.set(cursor, {
            x: mouseX,
            y: mouseY
        });

        isMoving = true;

        clearTimeout(moveTimeout);

        moveTimeout = setTimeout(() => {
            isMoving = false;
        }, 80);
    });

    hero.addEventListener('mouseleave', () => {
        isInsideHero = false;
        isMoving = false;

        gsap.to(cursor, {
            opacity: 0,
            duration: 0.2
        });
    });

    function createStar(x, y) {
        const star = document.createElement('div');
        star.className = 'hero__star';

        container.appendChild(star);

        gsap.set(star, {
            x,
            y,
            scale: 0.6,
            opacity: 1
        });

        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 120 + 20;

        gsap.to(star, {
            x: x + Math.cos(angle) * radius,
            y: y + Math.sin(angle) * radius,
            scale: 1.3,
            opacity: 0,
            duration: 1.8,
            ease: 'power2.out',
            onComplete: () => star.remove()
        });
    }

    function animate() {
        if (isInsideHero && isMoving && Math.random() > 0.6) {
            createStar(mouseX, mouseY);
        }

        requestAnimationFrame(animate);
    }

    animate();
}