//Syntax Suggar

//Manejandro usando la POO

class Animal { //Las clases no reciben parámetros
    constructor(pelo, ojos){
        this.pelo = pelo;
        this.ojos = ojos;
    }

    //Métodos

    correr(){
        console.log("Corriendo")
    }
}

class Perro extends Animal{ //Las clases no reciben parámetros
    constructor(apodo, pelo, ojos){
        super(pelo, ojos)
        this.apodo = apodo;
        
    }

    //Métodos

    ladrar(){
        console.log("Estoy ladrando")
    }
}

const animal = new Animal("oscuro", "negros");
const perro = new Perro("Max","beige", "claros")