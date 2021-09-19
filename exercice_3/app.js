const api_url = "https://geo.api.gouv.fr/departements";
const nom = document.querySelectorAll('input')[0];
const prenom = document.querySelectorAll('input')[1];
const select = document.querySelector('select');
const p = document.querySelector('p');
const form = document.querySelector('form');
const regex = new RegExp('^([a-zéàùêâûôèîçäëïüöA-ZÉÀÙÊÂÛÔÎÈÇÄËÏÜÖ]{1,})([- ][a-zéàùêâûôèîçäëïüöA-ZÉÀÙÊÂÛÔÎÈÇÄËÏÜÖ]{1,})?$');

async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    for(i = 0; i < data.length; i++){
        select.innerHTML += `<option value="${data[i]['code']}&nbsp-&nbsp${data[i]['nom']}">${data[i]['code']}&nbsp-&nbsp${data[i]['nom']}</option>}`
    }
};

window.addEventListener('load', getapi(api_url));

function verif(value){
    if(regex.test(value)){
        return true;
    }
    else{
        return false;
    }
};

form.addEventListener('submit', function(e){
    e.preventDefault();
    nom.style.border = '1px solid black';
    prenom.style.border = "1px solid black";
    if(!verif(nom.value) && verif(prenom.value)){
        p.innerHTML = "Rentrez un nom correct svp&nbsp!";
        nom.style.border = "2px solid red";
    }
    else if(!verif(prenom.value) && verif(nom.value)){
        p.innerHTML = "Rentrez un prénom correct svp&nbsp!";
        prenom.style.border = "2px solid red";
    }
    else if (!verif(prenom.value) && !verif(nom.value)){
        p.innerHTML = "Rentrez un nom et un prénom corrects svp&nbsp!";
        nom.style.border = "2px solid red";
        prenom.style.border = "2px solid red";
    }
    else{
        let code = parseInt(select.options[select.selectedIndex].text)
        if(code < 17 || code > 42){
            p.innerHTML = "Vous n'êtes pas éligible&nbsp!";
        }
        else{
            p.innerHTML = "Vous êtes éligible&nbsp!";
        }
    }
})