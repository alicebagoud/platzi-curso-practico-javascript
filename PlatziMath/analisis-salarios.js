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