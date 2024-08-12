//Creación de objetos literales (prototipos)

function Persona (nombre, edad){
    //Atributos
    this.nombre = nombre;
    this.edad = edad
     //Métodos
    this.saludar = function(){
        console.log("Hola, soy una persona")
    }
}

//Agregamos los métodos desde fuera
//Los pegamos a los prototipos
//(evita el duplicado de métodos)

Persona.prototype.despedir = function(){
    console.log("Adios, ya me voy")
}


//Aquí nos muestran el nombre del objeto (los literales no muestran)
//Instancias del objeto persona
const alejandro = new Persona("Alejandro", 29),
carlos = new Persona("Carlos", 18);

