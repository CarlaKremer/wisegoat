const API_URL = "https://api.adviceslip.com/advice"

function get(url){
    return fetch(url).then(response=>response.json());
}

const API = { get };

const quoteP = document.querySelector("h2#quote");

function getQuotes(){
    API.get(API_URL).then(data=>addQuote(
        data['slip']['advice']));
        console.log(API_URL)
}

function addQuote(quote){
    quoteP.innerText = '"'+quote +'"';
}

window.onload = getQuotes;
