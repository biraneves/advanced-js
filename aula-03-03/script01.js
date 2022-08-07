console.log("Início");

setTimeout(function getLog() {
    console.log("Aguarde");
}, 5000);

console.log("Fim");

Promise.resolve("Sucesso")
    .then(value => console.log(value), value => {});