// ECMAScript 2019 - ES10
/*  Array.flat()
    String.trimStart()
    String.trimEnd()
    Array.sort() */

// String.trimStart() e String.trimEnd()
console.log("    teste@teste.com.br".trimStart());
console.log("teste@teste.com.br      ".trimEnd());

//////////////////////////////////////////////////////////////////////
// Parâmetro opcional do catch

/////////////////////////////////////////////////////////////////////
// Array.flat() e Array.flatMap()
let arr = [1, 2, [3, 4]];
console.log(arr.flat());

let arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat(1));
console.log(arr2.flat(2));

let arr3 = [1, 2, [3, 4, [5, [6, 7, [8, 9, [10]]]]]];
console.log(arr3.flat(Infinity));

let arr4 = [1, 2, 3, , 5, 6];
console.log(arr4);
console.log(arr4.flat());

// Array.sort()
let arr5 = [2, 3, 1, 7, 4, 6, 3];
console.log(arr5.sort());