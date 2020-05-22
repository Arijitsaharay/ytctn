// javascript
let parallaxLvl = 10; // the more the value bg image will be closer
let bg = document.getElementById('bg'); // get element with id bg from html

(function init(){
    bg.style.height = 100 + parallaxLvl + 'vh'; // setting height of bg
    bg.style.width = 100 + parallaxLvl + 'vw'; // setting width of bg
})();

function map(val, bi, ti, bo, to){
    return (val - bi) * (to - bo) / (ti - bi) + bo // used to mapping number
}

function bgMove(e){
    let h = window.innerHeight; // page height
    let w = window.innerWidth; // page width
    let x = e.pageX; // mouse position in x axis
    let y = e.pageY; // mouse position in y axis

    // mapping cursor position to parallaxLvl
    let mx = map(x, 0, w, -parallaxLvl, parallaxLvl);
    let my = map(y, 0, h, -parallaxLvl, parallaxLvl);

    // setting background position to center added with mapped value | bad explanation :(
    let moveX = -w * (parallaxLvl/100)/2 - w/2 - mx;
    let moveY = -h * (parallaxLvl/100)/2 - h/2 - my;

    bg.style.transform = `translate(${moveX}px, ${moveY}px)`; // apply style to the element
}