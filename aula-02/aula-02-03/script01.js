function Pessoa(nome) {

    if (!nome)
        this.nome = "Fulano";
    else
        this.nome = nome;
    
    this.dizerOla = () => console.log(`${this.nome} diz olá!`);

}

let pessoa1 = new Pessoa("Alberto");

Pessoa.digaOla = function () {

    console.log(`Olá! Meu nome é ${this.nome}`);

}

let pessoa2 = new Pessoa("Maria");

console.log("--------------------------------------------------------------");

try {

    pessoa1.digaOla();

} catch (e) {

    console.log("Falha na pessoa1");

}

try {

    pessoa2.digaOla();

} catch (e) {

    console.log("Falha na pessoa2");

}

console.log("--------------------------------------------------------------");

pessoa2.digaOla = function () {

    console.log(`Olá! Meu nome é ${this.nome}.`);

}

try {

    pessoa1.digaOla();

} catch (e) {

    console.log("Falha na pessoa1");

}

try {

    pessoa2.digaOla();

} catch (e) {

    console.log("Falha na pessoa2");

}

console.log("--------------------------------------------------------------");

Pessoa.prototype.digaOla = function () {

    console.log(`Olá! Eu sou ${this.nome}.`);

}

try {

    pessoa1.digaOla();

} catch (e) {

    console.log("Falha na pessoa1");

}

try {

    pessoa2.digaOla();

} catch (e) {

    console.log("Falha na pessoa2");

}

let pessoa3 = new Pessoa();

try {

    pessoa3.digaOla();

} catch (e) {

    console.log("Falha na pessoa3");

}

console.log("--------------------------------------------------------------");

Pessoa.prototype.dizerOla = function () {

    console.log(`Sou ${this.nome} e vou dizer outro olá!`);

}

pessoa2.dizerOla = function () {

    console.log(`Sou ${this.nome}. Estou dizendo outro olá!`);

}

try {

    pessoa1.dizerOla();

} catch (e) {

    console.log("Falha na pessoa1");

}

try {

    pessoa2.dizerOla();

} catch (e) {

    console.log("Falha na pessoa2");

}

try {

    pessoa3.dizerOla();

} catch (e) {

    console.log("Falha na pessoa3");

}

let pessoa4 = new Pessoa("Sicrano");

try {

    pessoa4.dizerOla();

} catch (e) {

    console.log("Falha na pessoa4");

}