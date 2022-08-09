let Carro = {
    proprietario: "Fernanda",
    ano: 2016,
};

const handler = {
    get(target, property, receive) {

        console.log(`GET ${property}`);

        if (property in target) {
            return target[property];
        }

        return "Propriedade inexistente.";

    }
};

let carroProxy = new Proxy(Carro, handler);

console.log(Carro.ano);
console.log(carroProxy.ano);

console.log(Carro.modelo);
console.log(carroProxy.modelo);

let tradutor = {
    'Carro': 'Car',
    'Ano': 'Year',
};

let tradutorHandler = {

    get(target, property) {

        if (property in target)
            return target[property];

        return property;

    },
    set(target, property, value) {

        if (typeof value == 'string') {
            target[property] = value;
            return true;
        }

        return false;

    }

};

let tradutorProxy = new Proxy(tradutor, tradutorHandler);

console.log(tradutorProxy['Carro']);
console.log(tradutorProxy['Modelo']);

tradutorProxy["Modelo"] = "Model";
tradutorProxy["Marca"] = 123456;

console.log(tradutorProxy['Modelo']);
console.log(tradutorProxy['Marca']);