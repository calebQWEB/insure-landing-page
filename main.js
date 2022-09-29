const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    nav.classList.toggle('navActive')
})

window.onscroll = () => {
    if(scrollY > 0) {
        hamburger.classList.remove('active')
        nav.classList.remove('navActive')
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        hamburger.classList.remove('active')
        nav.classList.remove('navActive')
    }
})

let tl = gsap.timeline()

tl.from('.intro > h1', {opacity: 0, duration: 1, y: -200})
tl.from('.intro > p', {scale: 0})
tl.from('.intro-pic', {opacity: 0, x: 200})
tl.from('.intro-button', {scale: 0, ease: 'elastic'})

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.main-container',
        start: 'top center',
        toggleActions: 'play restart none reverse'
    }
})
tl3.from('.main-flex', {scale: 0, ease: 'elastic', stagger: {each: 0.1, from: 'start'}})

let tl4 = gsap.timeline(
    {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 50%',
            toggleActions: 'play restart none reverse'
        }
    }
)

tl4.from('.about', {opacity: 0, y: 100})


