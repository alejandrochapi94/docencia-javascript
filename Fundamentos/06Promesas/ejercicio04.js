//Ascync y await

//Ejemplo 1: Simular un retraso con setTimeout y await

async function simulateDelay(message) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(message);
      }, 2000);
    });
  }
  
  async function main() {
    const message = await simulateDelay("¡Hola desde el futuro!");
    console.log(message); // Imprime: ¡Hola desde el futuro!
  }
  
  main();

  /*
  Explicación:
simulateDelay es la misma función del ejemplo 1, pero ahora devuelve una promesa.
main es una función asíncrona que utiliza await para esperar a que la promesa simulateDelay se resuelva antes de continuar.
La palabra clave await solo se puede utilizar dentro de una función async.
  */