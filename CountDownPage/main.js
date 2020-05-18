// javascript
// targetDate is 31 may 2020 at 00:00
let targetDate = new Date(2020, 5, 0, 0, 0, 0, 0); // change this for target time

// get element with following id from html
let dayElem = document.querySelector('#day h1');
let hourElem = document.querySelector('#hour h1');
let minElem = document.querySelector('#minute h1');
let secElem = document.querySelector('#second h1');

(function SetTime(){
    setInterval(() => {
        let dateNow = new Date(); // get time now
        let timeRemain = targetDate - dateNow; // get the time remaining

        let dayRemain = Math.floor(timeRemain / 1000 / 60 / 60 / 24); // remaining day
        let hourRemain = Math.floor(timeRemain / 1000 / 60 / 60) % 24; // remaining hour
        let minRemain = Math.floor(timeRemain / 1000 / 60) % 60; // remaining minute
        let secRemain = Math.floor(timeRemain / 1000) % 60; // remaining second

        // change counter in HTML element value
        dayElem.innerHTML = format(dayRemain);
        hourElem.innerHTML = format(hourRemain);
        minElem.innerHTML = format(minRemain);
        secElem.innerHTML = format(secRemain);

    }, 1000); // change the value every 1 second
})();

function format(num){
    strnum = num.toString(); // convert number to character

    // if strnum didit count more than 1 then return it
    // else add 0 before the strnum
    return strnum.length > 1 ? strnum : '0'+strnum;
}