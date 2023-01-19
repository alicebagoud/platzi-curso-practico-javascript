console.log(salarios);

// Analisis personal para Juanita

function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda); // persona = name + trabajos en salarios.js
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function (elemento) {
        return elemento.salario;
    });

    const medianaSalarios = PlatziMath.calcularMediana(salarios);

    console.log(medianaSalarios);
    return medianaSalarios;
}

// Salario Futuro ? 

/* const salaryProjection = persona => {
    //Array de los porcentajes de incremento
    let incrementPercentage = [];

    const salarios_ = salarios
        .find(item => item.name === persona).trabajos
        .map(item => item.salario);

    //Sacando el procentaje de incremento de salarios
    const increment = salarios_.forEach((item, index, arr) => {
        if (index === (arr.length - 1)) {
            return increment;
        }
        //No lo he multiplicado por 100 porque después tendré que dividirlo por 10 de nuevo.
        let increment = ((arr[index + 1] - arr[index]) / arr[index]);
        incrementPercentage.push(increment + 1);
    });

    //Aplicando la media geometrica de los incrementos a 2 decimales.
    const mg = PlatziMath.mediaGeo(incrementPercentage).toFixed(2);

    //Obteniendo el porcentaje. Es decir: 1.45 => 45% fue el incremento.
    const percent = (mg - 1).toFixed(2);

    //Calculamos su proyeccion salarial con el porcentaje obtenido.
    const projSalarial = Math.trunc(salarios_[salarios_.length - 1] * (1 + (percent)));
    return projSalarial;
}

console.log(salaryProjection('Juanita'));
 */

function proyeccionSalarioPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimientoSalarios = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimientoSalarios.push(porcentajeCrecimiento)
    }
    const medianaPorcentajesCrecimientoSalario = PlatziMath.calcularMediana(porcentajesCrecimientoSalarios);
    
    // console.log(porcentajesCrecimientoSalarios, medianaPorcentajesCrecimientoSalario);

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimientoSalario;
    const nuevoSalario = ultimoSalario + aumento;

    return nuevoSalario;
}