// Lodash
import _ from 'lodash';

let cars = ['Palio', 'Uno', 'Gol', 'Saveiro', 'HB20', 'Creta', 'Nivus'];

// Retorna o primeiro e o último elemento de um array
console.log(_.first(cars));
console.log(_.last(cars));

// Retorna o enésimo elemento de um array
console.log(_.nth(cars, 3));
console.log(_.nth(cars, -2));

// Retorna um elemento aleatório
console.log(_.sample(cars));

// Embaralha os elementos do array - não altera o vetor original
console.log(_.shuffle(cars));

// Gera um número aleatório
console.log(_.random(10));
console.log(_.random(10));
console.log(_.random(10));
console.log(_.random(10));
console.log(_.random(5, 10));

// Repete a execução de uma função
_.times(3, () => console.log("Repetição"));

// Insere um atraso
_.delay(() => console.log("Atrasado"), 2000);
console.log("Sequência");

// Validação de tipo
let a = 1;
let b = 'Carro';
let c = [1, 2];
let d = {name: 'Bruno'};

console.log(_.isNumber(a));
console.log(_.isString(b));
console.log(_.isArray(c));
console.log(_.isObject(d));

console.log(_.isNumber(d));
console.log(_.isString(c));
console.log(_.isArray(b));
console.log(_.isObject(a));

// Mínimo e máximo de um vetor
let numbers = [-4, 3, 0, 1, 32, -12, 9];
console.log(_.min(numbers));
console.log(_.max(numbers));

// Soma dos elementos do array
console.log(_.sum(numbers));

// Currying
function log(date, type, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] ${message}`);
}

const logCurrying = _.curry(log);
logCurrying(new Date())("DEBUG")("Exemplo de currying com Lodash.");