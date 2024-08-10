//Ejemplo 1: Simular un retraso con setTimeout
function simulateDelay(message) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(message); // Resuelve la promesa después del retraso
      }, 2000); // Espera 2 segundos
    });
  }
  
  simulateDelay("¡Hola desde el futuro!")
    .then((message) => {
      console.log(message); // Imprime: ¡Hola desde el futuro!
    });

// simulateDelay es una función que crea una 
// promesa que se resuelve después de 2 segundos.
// setTimeout se utiliza para simular el retraso.
// resolve se llama con el mensaje después del retraso, 
// lo que hace que la promesa se resuelva.
// then se utiliza para manejar la resolución de la promesa.