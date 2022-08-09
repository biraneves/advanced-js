// ECMAScript 2020 - ES11
/*  BigInt
    Private methods
    Nullish coalescing operator
    globalThis
    Promise.allSettled
    optional chaining
    dynamic import */

// BigInt
console.log(Number.MAX_SAFE_INTEGER);
console.log()

let b = 1n;
let c = BigInt(2);
let d = 234345344654656765764563453554567567n;

console.log(b);
console.log(c);
console.log(d);

console.log(typeof d);

///////////////////////////////////////////////////////////////////////////
// Optional chaining
const entity = {
    car: {
        model: "Palio",
        owner: {
            name: "Lucas",
            age: 19,
            lastName: "Silva"
        },
        brand: "Fiat"
    }
};

// Pré ES11
if (entity.car && entity.car.owner && entity.car.owner.lastName) {
    console.log(entity.car.owner.lastName);
}

// ES11
let lastName = entity.car?.owner?.lastName;
console.log(lastName);

/////////////////////////////////////////////////////////////////////////////////////
// Nullish coalescing operator -  como o operador || não funciona bem para booleanos
// foi criado o operador ?? que funciona adequadamente.
const chassi = entity.car.chassi || "9B1234567890";
console.log(chassi);