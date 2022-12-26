console.group("Cuadrado")

function calcularCuadrado(lado1) {
    return {
        permimerto: lado1 * 4,
        area: lado1 * lado1,
    };
}

console.groupEnd("Cuadrado");


console.group("Triangulo")

function calcularTriangulo(lado1,lado2,base,altura) {
    return {
        permimerto: lado1 + lado2 + base,
        area: (base * altura) / 2,
    };
};

function calcularAlturaTriangulo(lado1, lado2, base) {
    if (lado1 === lado2) {
        console.warn ("Este triangulo es isoceles");
    } else {
        console.warn ("Este triangulo no es isoceles, vuelve a insertar los datos");
    } 
    return Math.sqrt(Math.pow(lado1, 2) - (Math.pow(base, 2) / 4));
};

console.groupEnd("Triangulo")

console.group("Circulo")

function calcularCirculo(radio){
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2); // radio ** 2 // radio * radio

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,
    };
}

console.groupEnd("Circulo")

