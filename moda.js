const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
    4,
    3,
    1,
    4,
    2,
    3,
    3,
    2,
    1,
    4,
    1,
];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);


 // .entries convierte un objeto en un array

/* const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
        valorAcumulado - nuevoValor
    }
); */

Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        if (elementoA > elementoB) return 1;
        if (elementoA == elementoB) return 0;
        if (elementoA < elementoB) return -1;
    }
);

// manera más corta: 

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1]; // entramos a la posición 1 de nuestro array que tiene 2 posiciones.
    }
);

const moda = lista1Array[lista1Array.length - 1];

