const api_url = "https://restcountries.eu/rest/v2/region/";
const prenom = document.querySelector('form > input');
const select = document.querySelector('select');
const p = document.querySelector('p');
const form = document.querySelector('form');
const regex = new RegExp('^([a-zéàùêâûôèîçäëïüöA-ZÉÀÙÊÂÛÔÎÈÇÄËÏÜÖ]{1,})([- ][a-zéàùêâûôèîçäëïüöA-ZÉÀÙÊÂÛÔÎÈÇÄËÏÜÖ]{1,})?$');

function random(data, select) {
    let arr = [];
    while (arr.length < select) {
        let country = Math.floor(Math.random() * data.length);
        if (arr.indexOf(country) === -1) {
            arr.push(data[country]);
        }
    }

    return arr;
};

async function getapi(url, select, region) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    let arr = random(data, select);
    let create_div = document.createElement('div');
    let create_h2 = document.createElement('h2');
    let content_h2 = document.createTextNode(region);
    create_h2.appendChild(content_h2);
    let div = document.body.insertBefore(create_div, null);
    div.insertBefore(create_h2, null);
    let create = document.createElement('ul');
    let ul = div.insertBefore(create, null);
    for (i = 0; i < arr.length; i++) {
        let create_li = document.createElement('li');
        let content_li = document.createTextNode(arr[i]['name']);
        create_li.appendChild(content_li);
        ul.insertBefore(create_li, null);
    }
    console.log(arr);

};



// window.addEventListener('load', getapi(api_url));

function verif(value) {
    if (regex.test(value)) {
        return true;
    } else {
        return false;
    }
};

form.addEventListener('submit', function (e) {
    e.preventDefault();
    p.innerHTML = "";
    const div = document.querySelectorAll('div');
    if (div.length != 0) {
        for (i = 0; i < div.length; i++)
            div[i].parentNode.removeChild(div[i]);
    }
        if (verif(prenom.value)) {
            let checked = document.querySelectorAll('input:checked');
            if (checked.length == 0) {
                p.innerHTML = "Veuillez sélectionner au moins un continent svp."
            } else {
                let number = select.options[select.selectedIndex].text;
                for (i = 0; i < checked.length; i++) {
                    getapi(api_url + checked[i].name, number, checked[i].name);
                }
            }

        } else {
            p.innerHTML = "Le prénom n'est pas correct&nbsp!";
        }
});