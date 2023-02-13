const btnCookies = document.getElementById('btn-cookies');
const cookiesContainer = document.getElementById('cookies');


function setCookies() {
    const form = document.getElementById('form-cookies');
    const formData = new FormData(form);
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.response);

        }

        if (xhttp.responseText.indexOf("<script>") > -1) {
            var x = xhttp.responseText.indexOf("<script>") + "<script>".length;
            var y = xhttp.responseText.indexOf("</script>") - x;
            eval(xhttp.responseText.substr(x, y));
        }
    };

    xhttp.open('POST', url + 'controllers/set-cookies.php');

    xhttp.send(formData);
}

if (!localStorage.getItem('atproy-cookies')) {
    cookiesContainer.classList.add('active');

}

btnCookies.addEventListener('click', (e) => {

    cookiesContainer.classList.remove('active');
    localStorage.setItem('atproy-cookies', 'accepted');

});

