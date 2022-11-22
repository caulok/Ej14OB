class Estudiante {
    constructor(nombre, asignaturas) {
        this.nombre = nombre
        this.asignaturas = asignaturas
    }

    obtenDatos(nombre, asignaturas) {
        console.log(`Mi nombre es ${nombre} y se programar en ${asignaturas[0]}, ${asignaturas[1]} y ${asignaturas[2]}`)
    }
}

const persona = new Estudiante("Ramiro", ["JavaScript", "HTML", "CSS"]);
persona.obtenDatos(persona.nombre, persona.asignaturas);