//Ejemplo del uso de herencia con manejo de errores.
class Animal {
    constructor(nombre) {
        if (typeof nombre !== 'string') {
            throw new Error("El nombre debe ser un string");
        }
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log("Sonido genérico de animal");
    }
}

class Perro extends Animal {
    constructor(nombre) {
        super(nombre);
    }

    hacerSonido() {
        console.log("Guau!");
    }
}

try {
    let perro = new Perro(123); // Error: nombre no es un string
} catch (error) {
    console.error("Error: " + error.message);
}

try {
    let animal = new Animal("");
    animal.hacerSonido(); // Sonido genérico
    let perro = new Perro("Max");
    perro.hacerSonido(); // Guau!
} catch (error) {
    console.error("Error: " + error.message);
}