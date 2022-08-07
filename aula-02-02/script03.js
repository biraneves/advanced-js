// CLOSURE
function IMC() {

    let altura = 1.80;

    function calcula() {

        let massa = 70;
        console.log(`IMC: ${massa / (altura * altura)}`);

    }

    return calcula;

}

let imc = IMC();
// imc();

// CLOSURE - ENCAPSULAMENTO
function Carro() {

    this.proprietario = "Bira";
    let ano = 2020;

    this.getAno = function() {

        return ano;

    }

    this.setAno = function(ano) {

        this.ano = ano;

    }

}

let carro = new Carro();

console.log(carro.proprietario);
console.log(carro.ano);
console.log(carro.getAno());