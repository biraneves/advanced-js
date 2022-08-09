// ECMAScript 2017 - ES8
/*  String padding
    Trailing commas
    async e await */

// String padding
console.log('IGTI'.padStart(1));
console.log('IGTI'.padStart(2));
console.log('IGTI'.padStart(3));
console.log('IGTI'.padStart(4));
console.log('IGTI'.padStart(8));
console.log('IGTI'.padStart(8, '-'));
console.log('IGTI'.padEnd(12, '*'));

// Object.entries()
const tipoLogradouro = {
    A: 'Área',
    AER: 'Aeroporto',
    AL: 'Alameda',
    AV: 'Avenida',
    BC: 'Beco',
    R: 'Rua'
};
console.log(Object.entries(tipoLogradouro));

// Object.values
console.log(Object.values(tipoLogradouro));

let endereco = {logradouro: 'Brasil'};
console.log(Object.getOwnPropertyDescriptors(endereco, 'logradouro'));

// Trailing commas
function Carro(arg1, arg2, arg3,) {}
Carro('Fiat', 'Palio', 2019,);

// async - await
const api = new Promise((resolve, reject) => {
    if (Math.random() > 0.5)
        resolve('Sucesso');
    
    reject('Falha');
});

// function request() {
//     api.then(console.log).catch(console.error);
// }

async function request() {
    try {
        const retorno = await api;
        console.log(retorno);
    } catch (err) {
        console.error(err);
    }
}

request();