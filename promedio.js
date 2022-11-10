/* const lista1 = [100, 200, 300, 500];

let sumaLista1 = 0;

for (let i = 0; i < lista1.length; i++) {
  sumaLista1 = sumaLista1 + lista1[i];
} 

sumaLista1 es igual a 0
Luego se adiciona lista1[i] que es igual a la posición 0, o sea 100
Lo que da 0 + 100 = 100

Luego se agrega el siguiente valor del array con nuestro i++

Luego se vuelve a ejecutar nuestro for:
sumaLista1 es igual a 100
y nuestra lista1[i] es ahora igual a la posición 1 en el array es decir 200
Lo que da 100 + 200 = 300


const promedioLista1 = sumaLista1 / lista1.length;

sumaLista1 = 1100 / lista1.lenght = 4 = 275
 */

function calcularMediaAritmetica(lista) { 
  /* la lista entre parentesis es lo que insertirían nuestros usuarios escogerían */

  /* con arrays -->

  let sumaLista = 0;
  for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
  } */


/* con el metodo reduce de los arrays que permite ir sumando cada uno de nuestros elementos */
  const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento) { 
    /* el valorAcumulado empieza en 0 + el nuevoElemento que es el primer elemento que agregue nuestro cliente en el array */
      return (
      valorAcumulado + nuevoElemento
    );
    /* en la segunda iteración tendremos el valorAcumulado que es igual al resultado anterior, 
    en este caso 0 + el primer elemento del array 
    y así sucesivamente */
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}



/* 
array.map()
manzana, naranja, banano --> manzana cortada, naranja cortada y banano cortado 

array.filter()
manzana, naranja, banano --> se escoge el filtrado que se desea, por ejemplo la naranja

array.reduce()
manzana, naranja, banano --> se van sumando(en este caso, puede ser multiplicando, dividiendo...) los elementos del array, es decir todos los pedazos de la manzana, de la naranja y del banano
*/