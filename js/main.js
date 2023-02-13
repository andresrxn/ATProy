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
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
    })
});

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
