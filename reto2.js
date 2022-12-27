/* Reto 2 --> pasar la mediana.html a una función usando el metodo .sort 

Para sortear una lista :
const lista = [1, 99, 54, 65, 123, 83452, 872, 50, 75];
lista.sort(function (a, b) {
  return a - b;
});*/

function calcularPromedio(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function calcularMediana(lista2) {
  const sortLista = lista2.sort(function(primerElemento, segundoElemento) {
    return primerElemento - segundoElemento;
  });
  const mitadLista2 = parseInt(sortLista.length / 2);

  function siPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  let mediana1;

  if (siPar(sortLista.length)) {
    const elementoMitad = mitadLista2;
    const segundoElementoMitad = elementoMitad - 1;
    const promedioElementos = calcularPromedio([elementoMitad, segundoElementoMitad]);
    mediana1 = promedioElementos;
  } else {
    mediana1 = sortLista[mitadLista2];
   /* const resultadoMediana = document.getElementById("resultadoMediana");
    resultP.innerText = "La mediana es: " + resultadoMediana;  */
    return mediana1;
  }
}