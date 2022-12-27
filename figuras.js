// Codigo del cuadrado

console.group("Cuadrados");

/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");
 */
function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
    return lado * lado
}
//console.log("El area del cuadrado mide: " + areaCuadrado + " cm^2");
console.groupEnd();

// Codigo del triangulo

console.group("Triángulos");

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cm" + ladoTriangulo2 + "cm" + baseTriangulo + "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triángulo mide: " + alturaTriangulo + " cm");
 */
/* const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo es: " + perimetroTriangulo + " cm");
 */

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

/* const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triángulo es: " + areaTriangulo + " cm^2");
 */

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

/* 
TODO: no funciona el area ni el perimetro 
*/

console.groupEnd();

// Codigo del circulo

console.group("Círculos");

// Radio

const radioCirculo = 4;
console.log("El radio del círculo mide: " + radioCirculo + " cm");

// Diametro

/* const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo mide: " + diametroCirculo + " cm");
 */
 function diametroCirculo(radio) {
    return radio * 2;
 }

// PI

const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia

/* const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");
 */

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


// Area

/* const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del círculo mide: " + areaCirculo + " cm^2");
 */

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

/* 
TODO: acortar el resultado decimal del resultado de circulo */

console.groupEnd();



// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; // esto nos da el valor que ingresaron los usuarios

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; // esto nos da el valor que ingresaron los usuarios

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetrotriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value; // esto nos da el valor que ingresaron los usuarios

    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value; // esto nos da el valor que ingresaron los usuarios

    const area = areaTriangulo(value);
    alert(area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value; // esto nos da el valor que ingresaron los usuarios

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value; // esto nos da el valor que ingresaron los usuarios

    const area = areaCirculo(value);
    alert(area);
}

