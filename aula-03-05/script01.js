// Common function
function getIDNormal(range) {

    let i = 0;

    while (i < range) {

        i++;
        return i;

    }

}

// Generator
function* getID(range) {

    let i = 0;

    while (i < range) {

        i++;
        yield i;

    }

}

let it = getID(3);

console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// for of
let it2 = getID(3);

for (const item of it2) {

    console.log(item);

}

// Exemplo de aplicação
function* getUniqueID() {

    let i = 0;

    while (true) {

        i++;
        yield `id-${i}`;

    }

}

const cars = {};
const idCarsGenerator = getUniqueID();

function addCar(car) {

    const id = idCarsGenerator.next().value;
    cars[id] = {id, car};

}

addCar('Palio');
addCar('Fox');
addCar('Mobi');

console.log(cars);

const carModelAll = {
    allModels: {
        'Fiat': [
            'Palio',
            'Cronos',
            'Toro'
        ],
        'Volkswagen': [
            'Gol',
            'Up',
            'Nivus',
            'Tiguan'
        ],
        'Chevrolet': [
            'Onix',
            'Tracker',
            'Corsa'
        ]
    },
    [Symbol.iterator]() {

        const brands = Object.values(this.allModels);
        
        let currentModelIndex = 0;
        let currentBrandIndex = 0;

        return {
            next() {

                const models = brands[currentBrandIndex];

                if (currentModelIndex >= models.length) {

                    currentBrandIndex++;
                    currentModelIndex = 0;

                }

                if (currentBrandIndex >= brands.length) {

                    return {
                        value: undefined,
                        done: true
                    }

                }

                return {
                    value: brands[currentBrandIndex][currentModelIndex++],
                    done: false
                };
            }
        };
    },
    *carGenerator() {

        const brands = Object.values(this.allModels);
        let currentBrandIndex = 0;

        while (currentBrandIndex < brands.length) {

            yield* brands[currentBrandIndex];
            currentBrandIndex++;

        }

    }
};

let itA = carModelAll.carGenerator();

console.log(itA.next());
console.log(itA.next());
console.log(itA.next());
console.log(itA.next());
console.log(itA.next());

for (const car of carModelAll.carGenerator()) {

    console.log(car);

}

// Destruct
let itB = carModelAll.carGenerator();

console.log([...itB]);