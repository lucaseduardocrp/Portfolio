const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

const sr = ScrollReveal ({
    distance: '25px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text',{delay:190, origin: 'bottom'})

sr.reveal('.about,.service,.portfolio,.contact',{delay: 200, origin: 'bottom'})

var typed = new Typed(".input", {
    strings: ["Web Design", "Front-End", "Web Mobile"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
})