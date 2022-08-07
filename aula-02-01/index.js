// ESCOPO DE BLOCO
if (true) {
    
    const message = "Olá!";
    console.log(message);
    
}

// console.log(message);    // ReferenceError: message is not defined

for (const color of ['verde', 'vermelho', 'amarelo']) {

    const message = "Olá!";
    console.log(color);
    console.log(message);

}

// console.log(color);
// console.log(message);

// EXEMPLO DE ESCOPO DE BLOCO COM VAR
if (true) {

    var count = 0;  // var não tem escopo de bloco
    console.log(count);

}

console.log(count);

// ESCOPO LOCAL COM VAR
function executar() {

    var text = "Escopo local com var";
    console.log(text);  // Funciona

}

executar();
// console.log(text);  // ReferenceError: text is not defined

// ESCOPO LOCAL COM LET E CONST
function executar2() {

    let text = 0;
    const test = 2;

    function executar3() {};

    console.log(text);
    console.log(test); 
    console.log(executar3);

}

executar2();
// console.log(text);   // ReferenceError: text is not defined
// console.log(test);
// console.log(executar3);

// ESCOPO ANINHADO
function executar3() {

    const txt = "Escopo aninhado";

    if (true) {

        const name = "Carro";
        console.log(txt);

    }

    // console.log(name);   // ReferenceError: name is not defined

}

executar3();

// ESCOPO GLOBAL
let gName = "Bira";
console.log(gName);

// HOISTING

printName();    // Uso da função antes de sua declaração (funciona também com variáveis)

function printName() {

    console.log(`Nome: ${gName}`);

}