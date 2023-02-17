let url = "http://localhost/ThePrincipal/";

const btnMenu = document.getElementById('header-menu');
const headerNav = document.getElementById('header-nav');
const showPasswords = document.querySelectorAll('.input-show-pass');
const headerSearchIcon = document.getElementById('header-search-icon');
const setModeCheck = document.getElementById("set-mode-check");
const lists = document.querySelectorAll('[data-filter-opt]');
const itemBox = document.querySelectorAll('[data-filter-card]');
const btns = document.querySelectorAll('button.btn')
const formatAmounts = document.querySelectorAll('[data-format-amount]')
const navLinks = headerNav.querySelectorAll('li')
const mores = document.querySelectorAll('[data-more]');
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
    })
});

var scaleElements = document.getElementsByClassName("scale");
var mostrarArribaElements = document.getElementsByClassName("mostrarArriba");
var opacityElements = document.getElementsByClassName("opacity");
var popupElements = document.getElementsByClassName("popup");
var progressElement = document.getElementsByClassName("progressAnimation");
var controller = new ScrollMagic.Controller();

for (var i = 0; i < scaleElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
        triggerElement: scaleElements[i], // 
        reverse: false,
        triggerHook: 0.95,
        offset: 35,

    })
        .setClassToggle(scaleElements[i], "animated")

        .addTo(controller);
}

for (var i = 0; i < mostrarArribaElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
        triggerElement: mostrarArribaElements[i], // 
        reverse: false,
        triggerHook: 0.92,
        offset: 35,
    })
        .setClassToggle(mostrarArribaElements[i], "animated")

        .addTo(controller);
}

for (var i = 0; i < opacityElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
        triggerElement: opacityElements[i], // 
        reverse: false,
        triggerHook: 0.92,
        offset: 35,

    })
        .setClassToggle(opacityElements[i], "animated")

        .addTo(controller);
}

for (var i = 0; i < popupElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
        triggerElement: popupElements[i], // 
        reverse: false,
        triggerHook: 0.9,
        offset: 35,

    })
        .setClassToggle(popupElements[i], "animated")

        .addTo(controller);
}
for (var i = 0; i < progressElement.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
        triggerElement: progressElement[i], // 
        reverse: false,
        triggerHook: 0.95,
    })
        .setClassToggle(progressElement[i], "animated")

        .addTo(controller);
}

// Menu
let menuOpen = false;
function openMenu() {
    btnMenu.addEventListener('click', () => {
        headerNav.classList.toggle('active');

        if (!menuOpen) {
            headerNav.classList.add('active');
            menuOpen = true;
        }
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `ShowRight 0.4s ease forwards ${index / 12}s`;
            }
        });
    });
}
function closeMenu() {
    headerNav.addEventListener('click', (e) => {
        // !container.is(e.target) && container.has(e.target).length === 0
        if (!headerNav.querySelector('ul').contains(e.target) && !headerNav.querySelector('.header-nav-date').contains(e.target)) {
            headerNav.classList.remove('active');
            menuOpen = false;
        }
    });
}
openMenu();
closeMenu();


// cookies
dataLayer = [];
if (localStorage.getItem('cookies-accepted')) {
    dataLayer.push({ 'event': 'cookies-aceptadas' });
}

if (document.querySelectorAll('.lazy')) {
    let images = document.querySelectorAll('.lazy');
    let options = {
        threshold: 0.15
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const image = entry.target;
            image.src = image.src.replace('preview-img', 'img');
            observer.unobserve(image);
        });
    }, options);

    images.forEach((image) => {
        observer.observe(image);
    });
}
mores.forEach(more => {
    more.addEventListener('click', () => {
        more.parentElement.classList.toggle('show')
    })
});
