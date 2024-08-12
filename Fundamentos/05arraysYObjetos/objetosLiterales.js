//Declaración de un objeto

let nombre = "Alejandro", edad = 29;

const persona = {
    nombre: nombre,
    edad: edad,
    saludar: function(){
        console.log("Hola soy una persona");
    }
}

console.log(persona.nombre)
persona.saludar()

//Otra forma (Nueva)
const persona2 = {
    nombre,
    edad,
    saludo (){
        console.log("Soy una segunda persona")
    }
}

console.log(persona2);
persona2.saludo()

//Parámetros REST y Operador spread (operador de propagación)

function sumar(a,b,...c){
    let resultado = a+b;

    c.forEach(function(n){
        resultado += n
    });
    return resultado
}

console.log(sumar(1,2))
console.log(sumar(1,2,3))
console.log(sumar(1,2,3,4,5))

//Cuando tenemos que guardar muchos elementos o argumentos

//Reemplazo del push (Spread operation)

const arr1 = [1,2,3,4,5], 
    arr2 = [6,7,8,9]

console.log(arr1,arr2)

const arr3 = [...arr1, ...arr2]
console.log(arr3)