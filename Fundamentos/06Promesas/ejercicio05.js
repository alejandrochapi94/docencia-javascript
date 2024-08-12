//Ejemplo 2: Manejar errores con try...catch

async function fetchData() {
    try {
      const data = await new Promise((resolve, reject) => {
        // Simula la obtención de datos
        const data = "";
        if (data) {
          resolve(data);
        } else {
          reject("Error al obtener datos");
        }
      });
      console.log(data); // Imprime: Datos obtenidos
    } catch (error) {
      console.error(error); // Imprime: Error al obtener datos
    }
  }
  
  fetchData();

  /*
  Explicación:
fetchData es una función asíncrona que utiliza try...catch para manejar errores.
Si la promesa se resuelve, el código dentro del bloque try se ejecuta.
Si la promesa se rechaza, el código dentro del bloque catch se ejecuta.
  */