// IIFE - Immediately Invoked Function Expression
// (function () {})();
//
// Principais benefícios:
// - evitar poluição do escopo global
// - privacidade de dados
// - closures
// - evitar renomear variáveis
// - capturar o objeto Global

(function mensagem () {

    console.log("Exemplo de IIFE");

})();

(function () {

    console.log("Exemplo 2 de IIFE");

})();

const unicoID = (function () {

    let count = 0;
    return function () {

        ++count;
        return `id_${count}`;

    };

})();

console.log(unicoID());
console.log(unicoID());
console.log(unicoID.count);