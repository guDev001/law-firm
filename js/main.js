const menuBtn = document.getElementById('menu-btn')
const navList = document.getElementById('nav-list')
const menuBtnIcon = document.querySelector('.changeIcon')

menuBtn.addEventListener('click', (e) =>{
    navList.classList.toggle('open')

    const isOpen = navList.classList.contains('open')
    menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line')
})


const scrollOption = {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
}

ScrollReveal().reveal('.header__content h1', {
    ...scrollOption,
})

ScrollReveal().reveal('.header__content p', {
    ...scrollOption,
    delay: 500,
})

ScrollReveal().reveal('.header__content .btn', {
    ...scrollOption,
    delay: 1000,
})

ScrollReveal().reveal('.about__cards .card', {
    ...scrollOption,
    distance: '0px',
    interval: 500,
})

ScrollReveal().reveal('.about__container .about__images', {
    ...scrollOption,
    origin: 'left',
})

ScrollReveal().reveal('.about__container .about__content', {
    ...scrollOption,
    origin: 'right',
})

ScrollReveal().reveal('.service__card', {
    ...scrollOption,
    interval: 500,
})

ScrollReveal().reveal('.team__card', {
    ...scrollOption,
    interval: 500,
})