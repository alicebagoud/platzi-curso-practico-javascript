const PlatziMath = {};

PlatziMath.esPar = function esPar(lista) {
    return !(lista.length % 2); // true (1) si impar y false (0) si par
    // si la lista es de 4 numeros % 2 => a 0 o sea par = true.
    // pero como esta negada => !4 numeros % 2 = 1 o sea par = false.
}
  
PlatziMath.esImpar = function esImpar(lista) {
    return lista.length % 2; // true (1) si par y false (0) si impar
    // si la lista es de 5 numeros % 2 => 1 o sea impar = false.
}

PlatziMath.calcularPromedio = function calcularPromedio(lista) {
    const sumaLista = lista.reduce((valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor);
    const promedioLista = sumaLista / lista.length;  
    return promedioLista;
}
  
PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const lista = ordenarLista(listaDesordenada);
    const listaEsPar = esPar(lista);
  
    if (listaEsPar) {
      const indexMitad1ListaPar = (lista.length / 2) - 1;
      const indexMitad2ListaPar = lista.length / 2;
      const listaMitades = [];
      listaMitades.push(lista[indexMitad1ListaPar]);
      listaMitades.push(lista[indexMitad2ListaPar]);
  
      const medianaListaPar = calcularPromedio(listaMitades);
      return medianaListaPar;
    } 
    else {
      const indexMitadListaImpar = Math.floor(lista.length / 2);
      const medianaListaImpar = lista[indexMitadListaImpar];
      return medianaListaImpar;
    }
}

PlatziMath.calcularModa = function calcularModa(lista) {
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

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
    const ordenarListaSort = ((valorAcumulado, nuevoValor) => valorAcumulado - nuevoValor);
    const listaOrdenada = listaDesordenada.sort(ordenarListaSort);
    return listaOrdenada;
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[i] - nuevoValor[i];
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}