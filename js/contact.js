let intPhone = document.getElementById('input-phone');
intPhone.value = "";
// urlUtils = url + 'js/utils.min.js';
let countryCodeValue = document.getElementById('countrycode').value;
if (countryCodeValue == "") {
    countryCodeValue = "GT";
}
// urlUtils = 'js/utils.min.js';
let arrayCountrySelected;
if (document.getElementById('inputUserCountry')) {
    arrayCountrySelected = [countryCodeValue];
} else {
    arrayCountrySelected = ['gt', 'us', 'mx', 'es', 'ar', 'sv', 'co', 'cl'];
}
let iti = window.intlTelInput(intPhone, {

    preferredCountries: arrayCountrySelected,
    separateDialCode: true,
    // utilsScript: urlUtils,
});


let countryCode = document.getElementById('countrycode');
let extensionCode = document.getElementById('extensioncode');

intPhone.addEventListener('countrychange', () => {

    countryCode.value = (iti.getSelectedCountryData().iso2).toUpperCase();
    extensionCode.value = iti.s.dialCode;
});

document.getElementById('extensioncode').value = iti.s.dialCode;

document.getElementById('form').reset();

let subjectSelect = document.getElementById('input-subject')

function checkSubject() {
    if (subjectSelect.value == 'civil') {
        document.getElementById('link-services').href = "servicios.html#civiles"
        document.querySelector('.input-special').classList.add('show')
        document.getElementById('special-checks').innerHTML = `
        <div class="special-check">
            <input type="checkbox" name="input-special[]" value="" id="special-1" value="Topografía">
            <label for="special-1">Topografía</label>
        </div>
        <div class="special-check">
            <input type="checkbox" name="input-special[]" value="" id="special-2" value="Obra Civil">
            <label for="special-2">Obra Civil</label>
        </div>
        <div class="special-check">
            <input type="checkbox" name="input-special[]" value="" id="special-3" value="Remodelación de Casa u Oficina">
            <label for="special-3">Remodelación de Casa u Oficina</label>
        </div>
        <div class="special-check">
            <input type="checkbox" name="input-special[]" value="" id="special-4" value="Otros">
            <label for="special-4">Otros</label>
        </div>`
    }
    else if (subjectSelect.value == 'electrico') {
        document.querySelector('.input-special').classList.add('show')
        document.getElementById('link-services').href = "servicios.html#electricos"
        document.getElementById('special-checks').innerHTML = `
        <div class="special-check">
            <input type="checkbox" name="input-special[]" value="" id="special-1" value="Topografía, Diseño, Planos y Construcción">
            <label for="special-1">Topografía, Diseño, Planos y Construcción</label>
        </div>
        <div class="special-check">
            <input type="checkbox" name="input-special[]" value="" id="special-2" value="Comercial">
            <label for="special-2">Comercial</label>
        </div>
        <div class="special-check">
            <input type="checkbox" name="input-special[]" value="" id="special-3" value="Legal y Regulatorio">
            <label for="special-3">Legal y Regulatorio</label>
        </div>
        <div class="special-check">
            <input type="checkbox" name="input-special[]" value="" id="special-4" value="Suministro de Equipos">
            <label for="special-4">Suministro de Equipos</label>
        </div>`
    }
    else if (subjectSelect.value == 'tele') {
        document.querySelector('.input-special').classList.add('show')
        document.getElementById('link-services').href = "servicios.html#de-telecomunicaciones"
        document.getElementById('special-checks').innerHTML = `
        <div class="special-check">
            <input type="checkbox" name="input-special[]" value="" id="special-1" value="Ingeniería total">
            <label for="special-1">Ingeniería total</label>
        </div>
        <div class="special-check">
            <input type="checkbox" name="input-special[]" value="" id="special-2" value="Corrección de Downtilt">
            <label for="special-2">Corrección de Downtilt</label>
        </div>
        <div class="special-check">
            <input type="checkbox" name="input-special[]" value="" id="special-3" value="Instalación de redes de tierra">
            <label for="special-3">Instalación de redes de tierra</label>
        </div>
        `
    } else if (subjectSelect.value == 'diseño') {
        document.querySelector('.input-special').classList.add('show')
        document.getElementById('link-services').href = "servicios.html#de-diseño"
        document.getElementById('special-checks').innerHTML = `
        <div class="special-check">
            <input type="checkbox" name="input-special[]" value="" id="special-1" value="Planos">
            <label for="special-1">Planos</label>
        </div>
        <div class="special-check">
            <input type="checkbox" name="input-special[]" value="" id="special-2" value="Proyectos">
            <label for="special-2">Proyectos</label>
        </div>
       
        `
    } else {
        document.getElementById('link-services').href = "servicios.html"

        document.getElementById('special-checks').innerHTML = ""
        document.querySelector('.input-special').classList.remove('show')

    }
}
subjectSelect.addEventListener('change', checkSubject)
window.addEventListener('DOMContentLoaded', checkSubject)
textAreaMax = 700
document.querySelector('textarea').addEventListener('input', () => {
    valLenght = document.querySelector('textarea').value.length;

    document.querySelector('.signal-num').innerText = valLenght;
    if (valLenght > textAreaMax) {
        document.querySelector('.characters').classList.add('error');
    } else {
        document.querySelector('.characters').classList.remove('error');

    }

});