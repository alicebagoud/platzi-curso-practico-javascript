const notes = [{
    course: "Educacion Fisica",
    note: 10,
    credit: 2,
},
{
    course: "Programacion",
    note: 8,
    credit: 5,
},
{
    course: "Finanzas Personales",
    note: 7,
    credit: 4,
},
];

// Multiplicar cada numero de la lista por su credito

const notesWithCredits = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

// Sumar todos los elementos del arreglo de elementos multiplicados por su credito

const sumOfNotesWithCredit = notesWithCredits.reduce(function (sum = 0, newVal) {
    return sum + newVal;
});

// Sumar todos los creditos

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(function (sum = 0, newVal) {
    return sum + newVal;
});

// Hacer la division entre ambas "sumas"

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

console.log(promedioPonderadoNotasConCreditos);