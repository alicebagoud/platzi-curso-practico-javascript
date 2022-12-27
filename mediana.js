/* misma función que promedio.js --> */

function calcularPromedio(lista) {
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    });
  
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  const lista1 = [50, 100, 500, 1000, 2000, 4000];
  
  const mitadLista1 = parseInt(lista1.length / 2); 
  /* 
  parseInt function permite convertir cualquier número, incluso decimales en un entero. 
  Por ejemplo 3.77 = 3. y 5,98873 = 5. 
  */
  
  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  let mediana;
  
  if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1]; 
    /* aquí ya tenemos el elemento de la mitad de la lista1 y queremos devolvernos una posición 
      para que busque el elemento anterior a la mitad de la lista 1 */
    const elemento2 = lista1[mitadLista1];
    const promedioElemento1y2 = calcularPromedio([elemento1, elemento2]);
    mediana = promedioElemento1y2;
  } else {
    mediana = lista1[mitadLista1];
    const resultadoMediana = document.getElementById("resultadoMediana");
    resultP.innerText = "La mediana es: " + resultadoMediana;
  }

  
  