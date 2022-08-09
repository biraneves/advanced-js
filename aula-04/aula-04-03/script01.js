// ECMAScript 2016 - ES7
/*  operador de exponenciação
    Array.prototypes.includes */

// Operador de exponenciação
let r = 3;

let area1 = Math.PI * r * r;
console.log(area1);

let area2 = Math.PI * Math.pow(r, 2);
console.log(area2);

let area3 = Math.PI * r ** 2;  // ES7
console.log(area3);

///////////////////////////////////////////////////////////////////////
// Array.prototypes.includes
console.log([1, 2, 3].includes(2));
console.log([1, 2, 3].includes(4));
console.log([1, 2, 3].includes(2, 2));