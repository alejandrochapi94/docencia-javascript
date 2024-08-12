//Herencia prototipica

function Animal(pelo, ojos){
    this.pelo = pelo;
    this.ojos = ojos
}
//Agregamos métodos al prototipo
Animal.prototype.caminar = function (){
    console.log("Estoy caminando")
}

function Perro(apodo, pelo, ojos){
    //Animal(pelo, ojos)
    Animal.call(this, pelo, ojos)
    this.apodo = apodo
}
//Unimos el prototipo del perro al de animal
Perro.prototype = Object.create(Animal.prototype)
//Asignamos el constructor de perro
Perro.prototype.constructor = Perro;

//Agregamos el método al protipo al perro
Perro.prototype.ladrar = function(){
    console.log("Estoy ladrando");
}
//Creamos objetos de tipo animal y perro
const animal  = new Animal("claro", "negros")
const perro = new Perro("max", "oscuro", "beige")
