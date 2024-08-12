

//Forma común de crear a un objeto

const perro = {
    nombre: "Hachiko",
    edad: 18,
    ladrar: function(){
        console.log("guau guau")
    }
}

console.log(perro.nombre);
perro.ladrar()

//Creación de un objeto mediante una función constructora con parámetros definidos

function Perro(){
    return({
        nombre: "balto",
        edad: 5,
        aullar: function(){
            console.log("Estoy aullando auuuuu")
        }
    })
}

const balto = Perro()
console.log(balto.nombre);
console.log(balto.edad);
balto.aullar()

//Creación de una función constructora con parámetros

function Gato(nombre, edad){
    return({
        nombre: nombre,
        edad: edad,
        ronronear: function(){
            console.log("Estoy ronroneando")
        }
    })
}

const garfield = Gato("Garfield", 1);
console.log(garfield.nombre);
console.log(garfield.edad);
garfield.ronronear()

//Con la utilización del constructor new y la palabra reservada this

function GatoHeroe(nombre, edad){
    let gato = {};

    gato.nombre= nombre;
    gato.edad = edad;
    gato.ronronear= function(){
        console.log("Estoy ronroneando como un gato heroe")
    }
    
    return gato
}

const gatoHeore = GatoHeroe("BigCat", 4);
console.log(gatoHeore.nombre);
console.log(gatoHeore.edad);
gatoHeore.ronronear()

//ahora nos ahorramos la declaración, definición y el retorno mediante el uso de new y this

function Animal(nombre, edad, tamanio){
    console.log(this)
    this.nombre= nombre
    this.edad= edad,
    this.tamanio = tamanio
    this.caminar = function(){
        console.log("Estoy caminando")
    }
}
//Usamos la palabra reservada new para llamar a el objeto
const golden = new Animal("Tito", 3, "Grande")

//console.log(golden.nombre)

//console.log(golden)