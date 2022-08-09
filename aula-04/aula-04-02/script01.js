// ECMAScript 2015 - ES6
/*  let e const
    arrow functions
    classes
    template strings
    destructing
    default, rest e spread */

// let e const
// ES5
var v = "Aula";
console.log(v);

if (true) {
    var x = "Outra aula";
}
console.log(x);

// ES6
let y = "Aula";
console.log(y);

if (true) {
    let z = "Mais uma aula";
}
// console.log(z); // Isto não funciona; let tem escopo de bloco

const PI = 3.141595;
console.log(PI);
// PI = 3.14;  // Isto não funciona; não se pode alterar o valor de uma constante.

const Aluno = {
    nome: "Bira",
    sobrenome: "Neves"
};

console.log(Aluno.nome);
console.log(Aluno.sobrenome);

Aluno.nome = "Ubirajara";   // Isto é possível. Somente a estrutura do objeto é constante.
console.log(Aluno.nome);

// Aluno = { nome: "Pâmela", sobrenome: "Czyziw" };    // Isto não funciona. Não se pode reatribuir a estrutura do objeto.

////////////////////////////////////////////////////////////////////////////////////////

// Arrow functions

// ES5
var soma = function(a, b) {
    return a + b;
}

function soma2(a, b) {
    return a + b;
}

// ES6
let soma3 = (a, b) => {
    return a + b
};
let soma4 = (a, b) => a + b;
let log = () => console.log("Erro");

const Aluno2 = {
    nome: "Ana",
    getAluno: function () {
        return this;
    }
};
console.log(Aluno2.getAluno());

const Aluno3 = {
    nome: "João",
    getAluno: () => this
};
console.log(Aluno3);

//////////////////////////////////////////////////////////////////////////////

// Classes

// ES5
function Carro2(marca) {
    this.marca = marca;
}
Carro2.prototype.getMarca = function () {};

// ES6
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    getMarca() {
        return this.marca;
    }
}
let veiculo = new Veiculo("Honda", "Accord");
console.log(veiculo.getMarca());

class Carro extends Veiculo {
    constructor(marca, modelo, estepe) {
        super(marca, modelo);
        this.estepe = estepe;
    }
    getInfo() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
}
let carro = new Carro("Honda", "Accord", true);
console.log(carro.getInfo());

///////////////////////////////////////////////////////////////////////////////////////////

// Template strings

// ES5
var nome = "Marina";
var idade = 19;
var curso = "Computação";

var frase = nome + " tem " + idade + " anos\ne cursa " + curso;

console.log(frase);

// ES6
let nome2 = "Marina";
let idade2 = 19;
let curso2 = "Computação";

let frase2 = `${nome2} tem ${idade2} anos
e cursa ${curso2}`;

console.log(frase2);

//////////////////////////////////////////////////////////////////////////////////////////
// Destructing

// ES5
var carros = ["Uno", "Gol"];

var carro1 = carros[0];
var carro2 = carros[1];

// ES6
let [car1, car2] = ["Uno", "Gol", "Ônix"];
console.log(car1);
console.log(car2);

// Swap
[car1, car2] = [car2, car1];
console.log(car1);
console.log(car2);

const c1 = { modelo: "Onix", ano: 2019};

const {modelo, ano} = c1;
console.log(modelo);
console.log(ano);

const printCarInfo = ({modelo, ano}) => `Modelo: ${modelo}, ano: ${ano}`;

console.log(printCarInfo(c1));

/////////////////////////////////////////////////////////////////////////////////
// Default, rest e spread

// ES5
var soma5 = function (a, b) {
    if (a === undefined)
        a = 1;

    if (b === undefined)
        b = 1;

    return a + b;
}

// ES6
let soma6 = (a = 1, b = 1) => a + b;
console.log(soma6());
console.log(soma6(5, 8));

// rest
// Somente ES6
function soma7(...valores) {
    return valores.reduce((anterior, atual) => anterior + atual);
}

console.log(soma7(1, 2, 3, 4, 5));

// spread
// Somente ES6
function soma8(a, b, c) {
    return a + b + c;
}

let numeros = [1, 2, 3];

console.log(soma8(...numeros));

/////////////////////////////////////////////////////////////////////////////////
// for of

for (let numero of numeros) {   // Navega nos valores
    console.log(numero);
}

for (let numero in numeros) {   // Navega nas propriedades (índices)
    console.log(numero);
}

const Aluno4 = {
    nome: 'Pedro',
    idade: 27,
    curso: 'Matemática',
    [Symbol.iterator]: function* () {
        yield this.nome
        yield this.idade
        yield this.curso
    }
};

// for (let aluno of Aluno4) { // Isto não funciona. Aluno não é iterável.
//     console.log(aluno);
// }

for (let aluno of Aluno4) { // Agora funciona, pois criou-se um iterator
    console.log(aluno);
}

for (let aluno in Aluno4) {
    console.log(aluno);
}