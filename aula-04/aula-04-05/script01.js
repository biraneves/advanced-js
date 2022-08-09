// ECMAScript 2018 - ES9
/*  Promises.prototype.finally()
    Iteração assíncrona
    Propriedades rest e spread */

const api = new Promise((resolve, reject) => {
    if (Math.random() > 0.5)
        resolve('Sucesso');

    reject('Falha');
});

function log() {
    console.log("Chamada concluída.");
}

api
    .then(res => {
        console.log(res);
    })
    .catch(rej => {
        console.error(rej);
    })
    .finally(() => {
        log();
    });

////////////////////////////////////////////////////////////////////
// rest e spread
const valores = {
    x: 1,
    y: 2,
    a: 3,
    b: 4
};

const {x, y, ...z} = valores;

console.log(x);
console.log(y);
console.log(z);

/////////////////////////////////////////////////////////////////
// asynchronous iteration
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
];

// async function getTodo() {

//     await urls.forEach(
//         async (url, idx) => {
//             let todo = await fetch(url);
//             console.log(`Retorno: ${idx + 1} - ${todo}`);
//         }
//     );

//     console.log("Concluído");

// }

// getTodo();

async function getTodo() {

    for (const [idx, url] of urls.entries()) {

        const todo = await fetch(url);
        console.log(`Retorno: ${idx + 1} - ${todo}`);

    }

    console.log("Concluído");

}

getTodo();