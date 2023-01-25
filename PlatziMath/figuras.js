// Codigo del cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return Math.round(lado * lado);
}

// Codigo del triangulo

function perimetroTriangulo(lado1, lado2, base) {
    return Math.round(lado1 + lado2 + base);
}

function areaTriangulo(base, altura) {
    return Math.round((base * altura) / 2);
}

function alturaTriangulo(lado1, base) {
    return Math.round(Math.sqrt(Math.pow(lado1, 2) - (Math.pow(base, 2) / 4)));
}

// Codigo del circulo

// Diametro

function diametroCirculo(radio) {
    return Math.round(radio * 2);
}

// Circunferencia

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return Math.round(diametro * Math.PI);
}

// Area

function areaCirculo(radio) {
    return Math.round(Math.pow(radio, 2) * Math.PI);
}

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; // esto nos da el valor que ingresaron los usuarios

    const perimetro = perimetroCuadrado(value);
    const resultPerimetroCuadrado = document.getElementById("resultPerimetroCuadrado");
    resultPerimetroCuadrado.innerText = "El perimetro de tu cuadrado es de: " + perimetro + "cm";
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; // esto nos da el valor que ingresaron los usuarios

    const area = areaCuadrado(value);
    const resultAreaCuadrado = document.getElementById("resultAreaCuadrado");
    resultAreaCuadrado.innerText = "El área de tu cuadrado es de: " + area + "cm.";
}

function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value; // esto nos da el valor que ingresaron los usuarios

    const perimetro = perimetroTriangulo(value, value, value);
    const resultPerimetroTriangulo = document.getElementById("resultPerimetroTriangulo");
    resultPerimetroTriangulo.innerText = "El perimetro de tu triangulo es de: " + perimetro + "cm.";
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value; // esto nos da el valor que ingresaron los usuarios

    const area = areaTriangulo(value, value);
    const resultAreaTriangulo = document.getElementById("resultAreaTriangulo");
    resultAreaTriangulo.innerText = "El área de tu triangulo es de: " + area + "cm.";
}

function calcularAlturaTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value; // esto nos da el valor que ingresaron los usuarios

    const altura = alturaTriangulo(value, value);
    const resultAlturaTriangulo = document.getElementById("resultAlturaTriangulo");
    resultAlturaTriangulo.innerText = "La altura de tu triangulo es de: " + altura + "cm.";
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value; // esto nos da el valor que ingresaron los usuarios

    const perimetro = perimetroCirculo(value);
    const resultPerimetroCirculo = document.getElementById("resultPerimetroCirculo");
    resultPerimetroCirculo.innerText = "El perimetro de tu circulo es de: " + perimetro + "cm.";
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value; // esto nos da el valor que ingresaron los usuarios

    const area = areaCirculo(value);
    const resultAreaCirculo = document.getElementById("resultAreaCirculo");
    resultAreaCirculo.innerText = "El área de tu circulo es de: " + area + "cm.";
}
