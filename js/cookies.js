const btnCookies = document.getElementById('btn-cookies');
const cookiesContainer = document.getElementById('cookies');



if (!localStorage.getItem('atproy-cookies')) {
    cookiesContainer.classList.add('active');

}

btnCookies.addEventListener('click', (e) => {

    cookiesContainer.classList.remove('active');
    localStorage.setItem('atproy-cookies', 'accepted');

});

