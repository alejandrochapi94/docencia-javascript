//Prototipos
//Sintaxis

//Declaración de ub objeto literal

const persona = {
    nombre: "Alejandro",
    edad: 29,
    saludo: function(){
        console.log("saludar")
    }
}

const persona2 = new Object({
    nombre: "Alejandro",
    edad: 29,
    saludo: function(){
        console.log("saludar2")
    }})


Object.prototype.dimeAlgo = function(){
    console.log("Algo")
}

//Creamos un objeto de tipo persona

const elena = Object.create(persona);
const carlos = Object.create(persona2);

elena.edad= 19;

//Todo en javascript son objetos

let cadena = "hola que tal"

//cadena.length