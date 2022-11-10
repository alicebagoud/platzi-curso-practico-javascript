
// Reto calcular la altura de un triángulo isósceles

// Julio 2022

function altura(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 != base) {
    alert("Este triángulo si es un triángulo isoceles");
    const altura = Math.sqrt(lado1 * lado2 - (base * base) / 4);
    console.log(
      "La altura de este triángulo isósceles es de: " + altura + "cm"
    );
  } else {
    alert(
      "No es un triángulo isósceles, por lo tanto, cambia tus medidas y vuelvelo a intentar :) "
    );
  }
};

// Noviembre 2022 (lograda sola)

function calcularAlturaTrianguloIsoceles(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 != base) {
    const alturaTrianguloIsoceles = Math.sqrt(Math.pow(lado1, 2) - (Math.pow(base, 2) / 4));
    return ("La altura de este triangulo isoceles mide: " + alturaTrianguloIsoceles + " cm.");
  } else {
    console.warn ("Este triangulo no es isoceles, vuelve a insertar los datos");
  }
};



// Reto calcular la altura de un triángulo escaleno (lograda sola)

function calcularAlturaTrianguloEscaleno(lado1, lado2, base) {
  if(lado1 === lado2 || lado1 === lado2 || lado2 === base){
    console.warn ("Este es un triangulo isoceles, vuelve a insertar tus datos");
  } else {
    const S = ((lado1 + lado2 + base) / 2);
    const alturaTrianguloEscaleno = ((2 / lado1) * Math.sqrt(S) * (S - lado1) * (S - lado2) * (S - base));
    return ("La medida de este triangulo escaleno es de: " + alturaTrianguloEscaleno + " cm.")
  }
};

/*  Platzi de otra manera

function solution(lado1, lado2, lado3) {

  let a = lado1;
  let b = lado2;
  let c = lado3;

  // Si no es escaleno, no continuamos
  if (a == b || b == c || c == a) {
    return false;
  }

  // Si es escaleno, calculamos primero su area
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  // Ahora usamos que A = bh/2, por lo que h = 2A/b
  let altura_a = Math.floor(2 * area / a);
  let altura_b = Math.floor(2 * area / b);
  let altura_c = Math.floor(2 * area / c);

}
*/