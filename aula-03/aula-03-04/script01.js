const carModel = [
    'Onix',
    'T-Cross',
    'HB20',
    'Palio'
];

// For com contador
for (let index = 0; index < carModel.length; index++) {

    console.log(carModel[index]);

}

console.log();

// For sem contador
for (const car of carModel) {

    console.log(car);

}

console.log();

// While
let contador = 0;
while (contador < carModel.length) {

    console.log(carModel[contador]);
    contador++

}

console.log();

// Trabalhando com iterators
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
    }
};

for (const car of carModelAll) {

    console.log(car);

}