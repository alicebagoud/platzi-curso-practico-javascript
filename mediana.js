/* 
const lista = [50, 100, 500, 1000, 2000, 4000];
const mitadlista = parseInt(lista.length / 2); 

parseInt function permite convertir cualquier número, incluso decimales en un entero. 
Por ejemplo 3.77 = 3. y 5,98873 = 5. 
*/

function calcularPromedio(lista) {
  const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function calcularMediana(lista) {
  const sortLista = lista.sort(function(primerElemento, segundoElemento) {
    return primerElemento - segundoElemento;
  });
  const mitadlista = parseInt(sortLista.length / 2);

function siPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

if (siPar(sortLista.length)) {
  const elementoMitad = mitadlista;
  const segundoElementoMitad = elementoMitad - 1;
  const promedioElementos = calcularPromedio([elementoMitad, segundoElementoMitad]);
  mediana = promedioElementos;
} else {
  mediana = sortLista[mitadlista];
  const resultadoMediana = document.getElementById("resultadoMediana");
  resultadoMediana.innerText = "La mediana es: " + resultadoMediana; 
  return mediana;
}
}

  