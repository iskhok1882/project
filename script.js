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

for (let i = 1; i < 10;  i++){
    if(i === 6) {
        // break;
        continue;
    }
    
    console.log(i);
}


