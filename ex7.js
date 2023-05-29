/** Solo modifica el cuerpo de la función. Implementa una función que dado un objeto que representa una persona, devuelva ùn objeto nuevo, con las mismas propiedades, pero además, con la propiedad 'edad' */
/** Prueba de implementar dos versiones: 1. crando un objeto de 0 con las propiedades que se piden. 2. usa el opreador de rest (...) par copiar las propiedades del objeto 'persona' y añade la propiedad 'edad'  */
function calcularEdad(persona) {


    const currentYear = new Date().getFullYear();
    let newPerson = {...persona,
        edad:currentYear-persona.nacimiento
    };
  
    // Modificar a partir de aqui

    // NO modificar a partir de aquí
    return newPerson;
  
}

console.log(calcularEdad({
    nombre: 'Marcos',
    nacimiento: '1998'
})); // { nombre: 'Marcos', nacimiento: '1998', edad: 24}

console.log(calcularEdad({
    nombre: 'Maria',
    nacimiento: '2003'
})); // { nombre: 'Maria', nacimiento: '2003', edad: 20}

console.log(calcularEdad({
    nombre: 'Samaneh',
    nacimiento: '1993'
}));