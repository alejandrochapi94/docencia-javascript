//Ejemplo 3: Cadenas de promesas con then
function step1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Paso 1 completado");
      }, 1000);
    });
  }
  
  function step2(message) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${message} - Paso 2 completado`);
      }, 1000);
    });
  }
  
  step1()
    .then((message) => {
      return step2(message); // Llama a step2 con el resultado de step1
    })
    .then((message) => {
      console.log(message); // Imprime: Paso 1 completado - Paso 2 completado
    });

//Explicación

// step1 y step2 son funciones que representan pasos secuenciales.
// then se utiliza para encadenar las promesas, 
// pasando el resultado de una promesa a la siguiente.