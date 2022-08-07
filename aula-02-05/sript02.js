// PROXY COM REFLECT
let tradutor = {
    'Carro': 'Car',
    'Ano': 'Year',
};

let tradutorHandler = {

    get(target, property) {

        if (property in target)
            return Reflect.get(target, property);

        return property;

    },
    set(target, property, value) {

        if (typeof value == 'string') {
            return Reflect.set(target, property,value);
        }

        return false;

    }

};

tradutor = new Proxy(tradutor, tradutorHandler);

console.log(tradutor['Carro']);
console.log(tradutor['Modelo']);

tradutor["Modelo"] = "Model";
tradutor["Marca"] = 123456;

console.log(tradutor['Modelo']);
console.log(tradutor['Marca']);

// PROXY/REFLECT PARA OCULTAR PROPRIEDADES
const hide = (target, prefix = '_') => new Proxy(target, {

    has: (target, property) => (!property.startsWith(prefix) && property in target),
    get: (target, property, receiver) => (property in receiver) ? target[property] : undefined,
    ownKeys: (target) => Reflect.ownKeys(target).filter(property => (!property.startsWith(prefix) || typeof property !== 'string'))

});

let Carro = hide({Ano: 2020, Modelo: 'Polo', _Proprietario: 'João'});

console.log(Carro.Ano);
console.log(Carro._Proprietario);
console.log('_Proprietario' in Carro);
console.log(Object.keys(Carro));