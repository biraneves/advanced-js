// Exemplo 1
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Sucesso p1'), 2000);
});

p1.then((res) => console.log(res), (rej) => {});

new Promise((resolve, reject) => {
    setTimeout(() => resolve('Sucesso p1'), 2000);
}).then((res) => console.log(res), (rej) => {});

// Exemplo 2
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Sucesso p2'), 2000);
});
p2.then((res) => console.log(res));
p2.catch((rej) => {});

p2.then((res) => console.log(res)).catch((rej) => {});

// Exemplo 3
const p3 = new Promise((resolve, reject) => {

    if (Math.random() > 0.5)
        resolve('Sucesso p3');
        
    reject('Falha p3');

});

p3.then(console.log).catch(console.error);

// Exemplo 4
const p4 = new Promise((resolve, reject) => {

    if (Math.random() > 0.5)
        resolve('Sucesso p4');

    reject('Falha p4');

});

p4
    .then(function acao1(res) { console.log(`${res} da ação 1`); return res })
    .then(function acao2(res) { console.log(`${res} da ação 2`); return res })
    .then(function acao3(res) { console.log(`${res} da ação 3`); return res })
    .catch(function erro(rej) {console.error(rej)});

// Exemplo 5
const p5 = new Promise((resolve, reject) => {

    if (Math.random() > 0.5)
        resolve('Sucesso p5');

    reject('Falha p5');

});

p5
    .then(function acao1(res) { console.log(`${res} da ação 1`); return res })
    .catch(function erro1(rej) { console.error("Erro no primeiro catch"); return rej})
    .then(function acao2(res) { console.log(`${res} da ação 2`); return res })
    .then(function acao3(res) { console.log(`${res} da ação 3`); return res })
    .catch(function erro2(rej) {console.error(rej)});