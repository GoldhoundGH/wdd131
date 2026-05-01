let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.querySelector('body');
let h4 = document.querySelector('h4');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;    
    if (current == 'dark') {
        // code for changes to colors and logo
        body.style.backgroundColor = "#333333";
        body.style.color = "lightgrey";
        h4.style.color = "#8aafffff";
        logo.src = "./images/byui-logo-white.png";
    } else {
        // code for changes to colors and logo
        body.style.backgroundColor = "white";
        body.style.color = "black";
        h4.style.color = "#0051ff";
        logo.src = "./images/byui-logo-blue.webp";
    }
}   
