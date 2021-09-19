const input = document.querySelector('input');
const form = document.querySelector('form');
const p = document.querySelector('p');
const tirer = document.querySelector('div button:nth-child(1)');
const effacer = document.querySelector('div button:nth-child(2)');
const ul_1 = document.querySelector('ul:nth-of-type(1)');
const ul_2 = document.querySelector('ul:nth-of-type(2)');
const regex = new RegExp('^([a-zéàùêâûôèîçäëïüöA-ZÉÀÙÊÂÛÔÎÈÇÄËÏÜÖ]{1,})([- ][a-zéàùêâûôèîçäëïüöA-ZÉÀÙÊÂÛÔÎÈÇÄËÏÜÖ]{1,})?$');


window.addEventListener('load', function(){
    if(window.localStorage.getItem('ul_1')){
        const ul = JSON.parse(window.localStorage.getItem('ul_1'));
    for(i = 0; i < ul.length; i++){
        create_li(ul_1, ul[i])
    }
    };
    if(window.localStorage.getItem('ul_2')){
        const ul = JSON.parse(window.localStorage.getItem('ul_2'));
        for(i = 0; i < ul.length; i++){
        create_li(ul_2, ul[i])
    }
    }
    
});

function create_li(ul, value) {
    let create = document.createElement('li');
    let content = document.createTextNode(value);
    create.appendChild(content);
    ul.insertBefore(create, null);
};

function delete_li(random) {
    let li = ul_1.children[random];
    ul_1.removeChild(li);
};


form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (regex.test(input.value)) {
        create_li(ul_1, input.value);
        p.innerHTML = "";
        input.value = "";
        input.focus();
        let all_li = [];
        let li = document.querySelectorAll('ul:nth-of-type(1) li');
        for(i = 0; i < li.length; i++){
            all_li.push(li[i].innerHTML);
        }
        window.localStorage.setItem('ul_1', JSON.stringify(all_li));
    } else {
        p.innerHTML = 'Veuillez rentrer un nom correct svp&nbsp!';
    }
});

tirer.addEventListener('click', function () {
    let count = ul_1.childElementCount;
    if (count < 1) {
        p.innerHTML = "Veuillez rentrer au moins 1 élément svp&nbsp!";
    } else {
        let children = ul_1.children;
        let random = Math.floor(Math.random() * count);
        create_li(ul_2, children[random].innerHTML);
        delete_li(random);
        let all_li = [];
        let li = document.querySelectorAll('ul:nth-of-type(1) li');
        for(i = 0; i < li.length; i++){
            all_li.push(li[i].innerHTML);
        }
        window.localStorage.setItem('ul_1', JSON.stringify(all_li));
        let all_li_2 = [];
        let li_2 = document.querySelectorAll('ul:nth-of-type(2) li');
        for(i = 0; i < li_2.length; i++){
            all_li_2.push(li_2[i].innerHTML);
        }
        window.localStorage.setItem('ul_2', JSON.stringify(all_li_2));
    }
});

effacer.addEventListener('click', function () {
    ul_1.innerHTML = "";
    ul_2.innerHTML = "";
    window.localStorage.clear();
});