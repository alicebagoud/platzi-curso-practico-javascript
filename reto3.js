/* Declarar un objeto que posteriormente sera mi objeto array

Llenar mi objeto array con la función con el metodo map para que mi array contenga los registros unicos.

Declarar e inicializar mi objeto array de arrays y utilizando el metodo Object.entries(array).sort, inicializamos todos los arrays internos y ordenamos por la prioridad de menos a mas.

Regresamos el ultimo array de mi objeto array de arrays. */


function calcularModa(array){
    const arrayCount = {};

    array.map(
        function (elemento) {
            if (arrayCount[elemento]) {
              arrayCount[elemento] += 1;
            } else {
              arrayCount[elemento] = 1;
            }
          }
    );

    const arrayList = Object.entries(arrayCount).sort(
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    )
    
    const calcularModa = arrayList[arrayList.length - 1];

    return calcularModa;
};