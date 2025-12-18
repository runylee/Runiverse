import { animate } from 'https://esm.sh/animejs'

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(
        entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            const libraryList = entry.target.querySelectorAll('.library li')

            animate(libraryList, {
                x: ['25vw', '0'],
                rotate: '-720deg',
                delay: (el, index) => index * 350,
                frameRate: 300,
            })

            observer.unobserve(entry.target)
            }
        })
        },
        {
        threshold: 0.3
        }
    )

    document.querySelectorAll('.work .text-slide').forEach(slide => {
        observer.observe(slide)
    })
})

