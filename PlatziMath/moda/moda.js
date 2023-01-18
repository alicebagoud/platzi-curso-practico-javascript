/* const lista1 = [1,2,3,4,5,5,4,3,2,1,5,3,1,4,2,5,5,4,3,2,2,5,2,2,1,3];
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

Object.entries(lista1Count).sort((elementoA, elementoB) => {
        if (elementoA > elementoB) return 1;
        if (elementoA == elementoB) return 0;
        if (elementoA < elementoB) return -1;
    }
);

const lista1Array = Object.entries(lista1Count).sort((elementoA, elementoB) => {
        return elementoA[1] - elementoB[1]; 
        // entramos a la posición 1 de nuestro array que tiene 2 posiciones.
    }
);

const moda = lista1Array[lista1Array.length - 1];
 */

function calcularModa(lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }

    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1)
    const listaOrdenadaMaxNumber = listaOrdenada[listaOrdenada.length - 1]; // -1 porque se empieza a contar desde 0

    const moda = listaOrdenadaMaxNumber[0];
    return moda;
}

function ordenarListaBidimensional(listaDesordenada, i) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[i] - nuevoValor[i];
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}
