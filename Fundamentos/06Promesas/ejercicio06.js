//Ejemplo 3: Cadenas de promesas con await

async function step1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Paso 1 completado");
      }, 1000);
    });
  }
  
  async function step2(message) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${message} - Paso 2 completado`);
      }, 1000);
    });
  }
  
  async function main() {
    const message1 = await step1();
    const message2 = await step2(message1);
    console.log(message2); // Imprime: Paso 1 completado - Paso 2 completado
  }
  
  main();

  