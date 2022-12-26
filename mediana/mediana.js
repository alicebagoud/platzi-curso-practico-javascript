/* misma función que promedio.html --> */

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    });
  
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  const lista1 = [50, 100, 500, 1000, 2000, 4000];
  
  const mitadLista1 = parseInt(lista1.length / 2); 
  
  /* parseInt funcion permite convertir cualquier número, incluso decimales en un entero. 
  Por ejemplo 3.77 = 3. 5,98873 = 5. 
  
  if (lista1 es par?) {
      necesitamos dos elementos
      --> promedio
      = mediana
  } else {
      posicion mitadLista1 dentro de lista1
      --> mediana
  } */
  
  
  function esPar(numerito) {
    if (numerito % 2 === 0) {
      /*  El modulo o residuo(la division) no nos da un residuo. Todos los números pares cuando los divides entre 2 solo con enteros, no nos va a dar residuo. */
      return true;
    } else {
      return false;  /* es impar */
    }
  }
  
  let mediana;
  
  if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1]; 
    /* aquí ya tenemos el elemento de la mitad de la lista1 y queremos devolvernos una posición 
      para que busque el elemento anterior a la mitad de la lista 1 */
    const elemento2 = lista1[mitadLista1];
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;
  } else {
    mediana = lista1[mitadLista1];
    const resultadoMediana = document.getElementById("resultadoMediana");
    resultP.innerText = "La mediana es: " + resultadoMediana;
  }
  