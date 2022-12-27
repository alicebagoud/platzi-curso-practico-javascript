
function calcularPromedio(lista) { 
  /* con el metodo reduce de los arrays que permite ir sumando cada uno de nuestros elementos */
    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento) { 
      /* el valorAcumulado empieza en 0 + el nuevoElemento que es el primer elemento que agregue nuestro cliente en el array */
      return valorAcumulado + nuevoElemento
    });
  
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  