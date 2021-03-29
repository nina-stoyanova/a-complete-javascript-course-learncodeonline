let red = document.querySelector(".red");
let cyan = document.querySelector(".cyan");
let violet = document.querySelector(".violet");
let orange = document.querySelector(".orange");
let pink = document.querySelector(".pink");

const center = document.querySelector(".center");


//console.log(window.getComputedStyle(red).backgroundColor);

let getBGColor = (selectedEelement) => { //instead of function()
    return window.getComputedStyle(selectedEelement).backgroundColor;

}

//console.log(getBGColor(pink));

// var color = getBGColor(pink);

// pink.addEventListener(`mouseenter`, () => {
//     center.style.background = color;
// });

/////Write it in a method

let magicColorChanger = (element, color) => {
    return element.addEventListener(`mouseenter`, () => {
        center.style.background = color;
    });
}

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(pink, getBGColor(pink));