//Ámbito de una función
//Recordando la forma en que funcionan las variables

var valor = "hola";
function funcionlocal(){
    var valor = "que tal";
    return valor;
}
console.log(valor);


//Funciones por declaración (Forma común) (Pueden ser llamadas antes de ser declaradas)


//Función sin parámetros ni retorno
function saludar(){
    //Cuerpo de la función (Instrucciones)
    console.log("Hola, bienvenido");
}
saludar();
//Función con parámetros sin retorno

function saludar(nombre){
    //let elie = "hola" //tiene ámbito de bloque
    console.log(nombre);
}

saludar(elie);
//Función sin parámetros con retorno
function decirHola(){
    return "hola como estas"
}
//Llamada la función
saludar = decirHola();
console.log(decirHola());
console.log(saludar);
//Función con parámetros con retorno

console.log(decirAdios("Carlos"))

function decirAdios(nombre){
    //console.log("Adios "+ nombre)
    return "Adios " + nombre
}

decirAdios();
//Funciones anidadas (Una dentro de otra y llamada)

//Funciones anidadas (una dentro de otra como retorno)

//PARÁMETROS???
//varias primitivas se manda valor
// (no se modifica el valor original dentro de la función)

//Por referencia (arrays y objetos) Se modifica el array original
//Se modifica la la memoria



// Cómo se interpretan las funciones en javascript
//#################################################
//Función declarada (de forma explícita)

    //El Hoisting en la función declarada (Pueden ser llamadas en cualquier parte del código
        //Después de haber sido declaradas)

        //También se pueden llamar antes de ser definidas

        //Llamamos antes de definir
        console.log(decirAdios("Carlos"))

        function decirAdios(nombre){
            //console.log("Adios "+ nombre)
            return "Adios " + nombre
        }

        //Función expresada (Function expression)
    //Funciones anónimas (puede o no tener un nombre)

    //Hoisting (No pueden ser llamadas antes de ser definidas)

    const sumar2 = function(a, b) {
        return a + b;
    };
    
    console.log(sumar2(5, 3)); // Salida: 8
    
/*
Diferencia entre Funciones Declaradas y Expresadas

Hoisting: Las funciones declaradas se elevan (hoisting) al 
inicio de su ámbito, permitiendo que se llamen antes de su 
definición en el código. Las funciones expresadas no tienen 
este comportamiento.

Sintaxis: Las funciones declaradas usan la palabra clave 
function seguida de un nombre, mientras que las expresadas 
asignan una función anónima a una variable.
*/

//Ejempos (DIFERENCIAS)
// Función Declarada
console.log(multiplicar(4, 5)); // Funciona correctamente, salida: 20

function multiplicar(a, b) {
    return a * b;
}

// Función Expresada
console.log(dividir(10, 2)); // Error: Cannot access 'dividir' before initialization

const dividir = function(a, b) {
    return a / b;
};

//EJERCICIOS
function calcularAreaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

console.log(calcularAreaCirculo(5)); // Salida: 78.53981633974483

const calcularAreaCirculo = function(radio) {
    return Math.PI * Math.pow(radio, 2);
};

console.log(calcularAreaCirculo(5)); // Salida: 78.53981633974483
 //Segundo ejercicio

 function encontrarMaximo(a, b, c) {
    return Math.max(a, b, c);
}

console.log(encontrarMaximo(10, 5, 8)); // Salida: 10

const encontrarMaximo = function(a, b, c) {
    return Math.max(a, b, c);
};

console.log(encontrarMaximo(10, 5, 8)); // Salida: 10

// Arrow Function (Función flecha)

const saludrAhora = (nombre) => {
    //cuerpo de la funcion
    return nombre
}

const saludrAhora1 = (nombre) => {return nombre}

//Caracteristicas

//valores por defecto cuando usamos argumentos

function Sumar (numero1, numero2=7){
    return numero1 + numero2
}

let resltado
resultado = Sumar(5)
console.log(resultado)

// Funciones como argumentos o parámetros

// Función principal
function operacion (a, b, haciendo){
    //return a+b
    return haciendo(a,b);
}
//Función que se va a mandar como argumento
const sumar = (n, p) => n+p; //Arrrow function
const multiplicar = (a, b) => a*b;

//Llamada a una función con argumentos o parámetros
console.log(operacion(8,5,sumar));
console.log(operacion(8,5,multiplicar));

//Funciones anidadas

function afuera(){
    console.log("hola mundo")

    //Segunda función
    function adentro(){
        
        
        return "adios mundo"
    }

    // Llamando a la función adentro desde afuera
    return adentro();
}

console.log(afuera())



//Un programa que suma dos números

function sumar2(a,b) {
    return a+b
}

console.log(sumar2(5,6))



const sumar3 = function(a,b){
    //Cuerpo de la funcion
    return a+b

}

console.log(sumar3(5,6))


const sumar4 = (a,b) => a+b;

console.log(sumar4(5,6))




//Una función que determine el mayor de dos números

function mayor(a,b){
    if (a > b) {
        console.log("a es mayor");
    } else if (b > a) {
        console.log("b es mayor");
    }    
}

mayor(5,6)

//Contar cuántas letras tiene la palabra "hola"


const caracteres = (a) => {
    //contador
    let count = 0;
    // inicio , condición , incremento
    for (let n = 0; n < a.length; n++) {
        count++;
    }
    return count;
}

console.log(caracteres("gola"))


function letras(a){
    let n =0
    let contador =0
    while (n<a.length) {
        contador++;
        n++
console.log(contador)
    }
}

letras("saludo")
//Contador de letras con bucle for...of
function contadorLetras(a){
    let sumador = 0;
    for (let iterador of a){
        sumador++;
    }
    return sumador;
}

console.log(contadorLetras("holaMundo"))





//Funciones anónimas o funciones lambda

//Callback

//Funciones autoejecutables

//Closures