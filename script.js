"use strict";

// 29.03.2021


if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('mnogo');
// } else {
//     console.log('ok');
// }

const num = 50;

switch (num) {
    case 49:
        console.log('wrong');
        break;
    case 100:
        console.log('wrong');
        break;
    case 51:
        console.log('correct');
        break;
    default:
        console.log('not at this time');
        break;
}




// 30.03.2021 



let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do{
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }

    console.log(i);
}

// 06.04.2021

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("hello world!");
console.log(num);

function calc(a, b) {
    return (a + b);
}

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 3));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log("hello");
};

const calc = (a, b) => a + b;

/////////////////////////////////

const str = "test";

// console.log(str.length);
console.log(str.toUpperCase());
console.log(str);

let fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

console.log(logg.slice(6, 10));

console.log(logg.substring(6, 10));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num))

const test = "12.2px";
// console.log(parseInt(test))
console.log(parseFloat(test));



//////// 07.04.2021