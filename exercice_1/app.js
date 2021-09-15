const button_1 = document.querySelector('article:nth-of-type(1) button');
const p_1 = document.querySelector('article:nth-of-type(1) p');

function random() {
    const x = Number.MAX_SAFE_INTEGER;
    return Math.floor(Math.random() * (x + 1));
};

button_1.addEventListener('click', function () {
    let x = random();
    p_1.innerHTML = x;
});

const button_2 = document.querySelector('article:nth-of-type(2) button');
const p_2 = document.querySelector('article:nth-of-type(2) p');
const input_2 = document.querySelector('article:nth-of-type(2) input');
const regex_firstname = new RegExp("^[a-zA-ZéèàùâêûôîäëüïöÂÊÛÎÔÄËÜÏÖÀÇçÉÈ]{1,}([-][a-zA-ZéèàùâêûôîäëüïöÂÊÛÎÔÄËÜÏÖÀÇçÉÈ]{1,})?$");

function verify_firstname(x) {
    if (typeof x == "string") {
        const reg = regex_firstname.test(x);
        if (reg == true) {
            return `Bonjour ${x}`;
        } else {
            return "Rentrez un prénom valable&nbsp!";
        }
    } else {
        return "Erreur";
    }
};

button_2.addEventListener('click', function () {
    let x = verify_firstname(input_2.value);
    p_2.innerHTML = x;
});

const button_3 = document.querySelector('article:nth-of-type(3) button');
const p_3 = document.querySelector('article:nth-of-type(3) p');
const input_3 = document.querySelector('article:nth-of-type(3) input');
const regex_tva = new RegExp("^[0-9]{1,}([.][0-9]{1,2})?$");

function verify_amount(x) {
    if (!isNaN(x)) {
        const reg = regex_tva.test(x);
        if (reg == true) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

function tva(x) {
    let y = Math.floor(x * 120) / 100;
    return y;
};

button_3.addEventListener('click', function () {
    let x = verify_amount(input_3.value);
    if (x == true) {
        let y = tva(input_3.value);
        p_3.innerHTML = y;
    } else {
        p_3.innerHTML = "Entrez une somme avec un maximum de 2 chiffres après le point&nbsp!"
    }
});

const input_4 = document.querySelector('article:nth-of-type(4) input');
const p_4 = document.querySelector('article:nth-of-type(4) p');
const button_4 = document.querySelector('article:nth-of-type(4) button');
const regex_height = new RegExp("^[1-2]{1}[0-9]{2}$|^[5-9]{1}[0-9]{1}$")

function verify_height(x) {
    if (!isNaN(x)) {
        let reg = regex_height.test(x);
        if (reg == true) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

function compare_height(x){
    if(x < 154){
        return "Trop petit pour le manège";
    }
    else if(x > 190){
        return "Trop grand pour le manège";
    }
    else{
        return "Super&nbsp! Tu peux y aller&nbsp!";
    }
};

button_4.addEventListener('click', function(){
    let x = verify_height(input_4.value);
    if(x == true){
        let y = compare_height(input_4.value);
        p_4.innerHTML = y;
    }
    else{
        p_4.innerHTML = "Rentrez une taille entre 50 et 299cm&nbsp!"
    }
});