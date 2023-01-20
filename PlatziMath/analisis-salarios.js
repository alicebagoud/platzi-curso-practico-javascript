console.log(salarios);

// Analisis personal

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

// Analisis empresarial

const empresas = {};

for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) { 
            // Si no existe la empresa, vamos a crearla
            empresas[trabajo.empresa] = {};
        }   

        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

console.log(empresas);

// Con forEach

/* 
    const empresa = () => {
    const empresas = {};

    salarios.forEach(item => item.trabajos.forEach(item => {
        if (!empresas[item.empresa]) empresas[item.empresa] = {};
        else {
            if (!empresas[item.empresa][item.year]) empresas[item.empresa][item.year] = [];
            else empresas[item.empresa][item.year].push(item.salario);
        }
    }));

    return empresas;
}

console.log(empresa());
 */