// Currying
function log(date, type, message) {

    console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] ${message}`);

}

log(new Date(), "DEBUG", "Exemplo sem currying.");

const logCurrying = date => type => message => console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] ${message}`);

logCurrying(new Date())("DEBUG")("Exemplo com currying");

let logNow = logCurrying(new Date());
logNow("DEBUG")("Exemplo de currying com parâmetro de valor fixo");

let debugNow = logNow("DEBUG");
debugNow("Exemplo de currying com parâmetros de valores fixos.");