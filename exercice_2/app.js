const input = document.querySelector('input');
const form = document.querySelector('form');
const tirer = document.querySelector('div button:nth-child(1)');
const effacer = document.querySelector('div button:nth-child(2)');
const ul_1 = document.querySelector('ul:nth-of-type(1)');
const ul_2 = document.querySelector('ul:nth-of-type(2)');
const regex = new RegExp('^[a-zéàùêâûôèîçäëïüöA-ZÉÀÙÊÂÛÔÎÈÇÄËÏÜÖ]([-\s][a-zéàùêâûôèîçäëïüöA-ZÉÀÙÊÂÛÔÎÈÇÄËÏÜÖ]*)?$');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
})