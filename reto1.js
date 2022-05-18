
// Reto calcular la altura de un triángulo isósceles

function altura(lado1, lado2, base) {
    if (lado1 === lado2 && lado1 != base) {
        alert("isoceles")
        const altura = Math.sqrt((lado1 * lado2) - (base * base) / 4);
        console.log("La altura de un triángulo isósceles es de: " + altura + "cm")   
    } else {
        alert ("No es un triángulo isósceles, por lo tanto, cambia tus medidas y vuelvelo a intentar :) ")
    }
}
