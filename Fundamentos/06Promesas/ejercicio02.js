//Ejemplo 2: Manejar errores con catch

function fetchData() {
    return new Promise((resolve, reject) => {
      // Simula la obtención de datos
      const data = "Datos obtenidos";
      if (data) {
        resolve(data);
      } else {
        reject("Error al obtener datos");
      }
    });
  }
  
  fetchData()
    .then((data) => {
      console.log(data); // Imprime: Datos obtenidos
    })
    .catch((error) => {
      console.error(error); // Imprime: Error al obtener datos
    });

// fetchData simula la obtención de datos.
// Si se obtienen los datos, la promesa se resuelve con resolve.
// Si no se obtienen los datos, la promesa se rechaza con reject.
// catch se utiliza para manejar el rechazo de la promesa.