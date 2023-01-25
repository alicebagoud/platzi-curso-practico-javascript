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


// Mediana de salarios en una empresa en un año especifico:

function medianaEmpresaYear(nombre, year) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else if (!empresas[nombre][year]) {
        console.warn('La empresa no dio salarios ese año');
    } else {
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}

// Proyeccion de salario por empresa por año

function proyeccionSalarioPorEmpresa(nombre) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresaYear(nombre, year);
        });

        let porcentajesCrecimientoSalarios = [];

        for (let i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;
            porcentajesCrecimientoSalarios.push(porcentajeCrecimiento)
        }

        const medianaPorcentajesCrecimientoSalario = PlatziMath.calcularMediana(porcentajesCrecimientoSalarios);

        const ultimaMedianaSalario = listaMedianaYears[listaMedianaYears.length - 1];
        const aumento = ultimaMedianaSalario * medianaPorcentajesCrecimientoSalario;
        const nuevaMedianaSalario = ultimaMedianaSalario + aumento;

        return nuevaMedianaSalario;
    }   
}

// Analisis general

function medianaGeneral() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));

    const mediana = PlatziMath.calcularMediana(listaMedianas);

    return mediana;
}

// Mediana de 10%

function medianaTop10() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));

    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);

    const cantidad = listaMedianas.length / 10; // cantidad de elementos que representan al top 10%
    const limite = listaMedianas.length - cantidad; 

    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length); 
    /* el metodo slice va a crear un nuevo arreglo que coge los elementos desde la posicion limite y el final del arreglo
    = para tener los arreglos (salarios) mas altos */

    const medianaTop10 = PlatziMath.calcularMediana(top10);

    return medianaTop10;
}