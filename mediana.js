/* 
const lista = [50, 100, 500, 1000, 2000, 4000];
const mitadlista = parseInt(lista.length / 2); 

parseInt function permite convertir cualquier número, incluso decimales en un entero. 
Por ejemplo 3.77 = 3. y 5,98873 = 5. 
*/

function calcularPromedio(lista) {
  const sumaLista = lista.reduce((valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor);
  const promedioLista = sumaLista / lista.length;  
  return promedioLista;
}

function ordenarLista(listaDesordenada) {
  const ordenarListaSort = ((valorAcumulado, nuevoValor) => valorAcumulado - nuevoValor);
  const lista = listaDesordenada.sort(ordenarListaSort);
  return lista;
}

function esPar(lista) {
  return !(lista.length % 2); // true (1) si impar y false (0) si par
  // si la lista es de 4 numeros % 2 => a 0 o sea par = true.
  // pero como esta negada => !4 numeros % 2 = 1 o sea par = false.
}

function esImpar(lista) {
  return lista.length % 2; // true (1) si par y false (0) si impar
  // si la lista es de 5 numeros % 2 => 1 o sea impar = false.
}

function calcularMediana(listaDesordenada) {
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


/* function calcularMediana(lista) {
  const sortLista = lista.sort((primerElemento, segundoElemento) => primerElemento - segundoElemento);
  const mitadLista = parseInt(sortLista.length / 2);

  function siPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  let mediana;

  if (siPar(sortLista.length)) {
    const elementoMitad = mitadLista;
    const segundoElementoMitad = elementoMitad - 1;
    const promedioElementos = calcularPromedio([elementoMitad, segundoElementoMitad]);
    mediana = promedioElementos;
  } else {
    mediana = sortLista[mitadLista];
    const resultadoMediana = document.getElementById("resultadoMediana");
    resultadoMediana.innerText = "La mediana es: " + mediana; 
  }
} */