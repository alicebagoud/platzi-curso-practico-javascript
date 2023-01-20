
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
