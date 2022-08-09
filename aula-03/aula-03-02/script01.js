// Promise.resolve
// const p1 = new Promise((resolve) => resolve(console.log("Sempre será resolvida")));
Promise.resolve(console.log("Sempre será resolvida"));

// Promise.reject
// Promise.reject(console.log("Sempre será rejeitada."));

// Promise.all
Promise.all([
    new Promise(resolve => setTimeout(resolve, 1200, "p1")),
    new Promise(resolve => setTimeout(resolve, 700, "p2")),
    new Promise(resolve => setTimeout(resolve, 2900, "p3")),
])
    .then(results => results.data[0].name)
    .then(name => console.info(name))
    .catch(erro => console.error(`Exceção lançada na: ${erro}`));

Promise.all([
    new Promise(resolve => setTimeout(() => resolve([]), 1200)),
    new Promise(resolve => setTimeout(() => resolve([10]), 700)),
    new Promise(resolve => setTimeout(() => resolve([3, 4]), 2900)),
])
    .then(results => results.length)
    .then(size => console.info(size))
    .catch(erro => console.error(erro));

Promise.all([
    new Promise(resolve => setTimeout(() => resolve([]), 2800)),
    new Promise((resolve, reject) => setTimeout(() => reject([10]), 1200)),
    new Promise(resolve => setTimeout(() => resolve([3, 4]), 800)),
])
    .then(results => results.length)
    .then(size => console.info(size))
    .catch(erro => console.error(erro));

// Promise.race
const p5 = Promise.race([
    new Promise(resolve => setTimeout(resolve, 2000, "p1")),
    new Promise((resolve, reject) => setTimeout(reject, 3000, "p2"))
])
    
p5.then(result => console.log(result));
p5.catch(error => console.error(error));