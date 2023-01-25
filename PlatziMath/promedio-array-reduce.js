function calcularPromedio(lista) {
  const sumaLista = lista.reduce((valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor);
  const promedioLista = sumaLista / lista.length;  
  return promedioLista;
}

function resultadoPromedio() {
  const inputPromedio = document.getElementById("inputPromedio");
  const value = inputPromedio.value;

  const promedio = calcularPromedio(value);

  const resultPromedio = document.getElementById("resultPromedio");
  resultPromedio.innerText = "Tu promedio es de: " + promedio;
} 

/* 
TODO que funcione con HTML
*/


