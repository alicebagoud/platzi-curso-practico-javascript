const lista = [100, 200, 300, 500];

let sumaLista = 0;

for (let i = 0; i < lista.length; i++) {
  sumaLista = sumaLista + lista[i];
} 

const promedioLista = sumaLista / lista.length;

/* 
sumaLista es igual a 0
Luego se adiciona lista[i] que es igual a la posición 0, o sea 100
Lo que da 0 + 100 = 100

Luego se agrega el siguiente valor del array con nuestro i++

Luego se vuelve a ejecutar nuestro for:
sumaLista es igual a 100
y nuestra lista[i] es ahora igual a la posición 1 en el array es decir 200
Lo que da 100 + 200 = 300 
*/


/* 
TODO: que se pueda usar el HTML y no la consola
*/