## Realizar los siguientes ejercicios

1. Simulación de un sistema de pedido:
Crea una función hacerPedido que simule un pedido online.
Esta función debe devolver una promesa que se resuelve después de un tiempo aleatorio (entre 1 y 5 segundos) con un mensaje como "Pedido realizado correctamente".
Usa setTimeout para simular el tiempo de espera.
Crea una función main asíncrona que llame a hacerPedido y maneje la resolución de la promesa con then.


2. Simular un juego de azar:
Crea una función tirarDado que simule el lanzamiento de un dado.
La función debe devolver una promesa que se resuelve con un número aleatorio entre 1 y 6 después de un pequeño retraso (1 segundo).
Crea una función jugar asíncrona que llame a tirarDado dos veces y compare los resultados, mostrando un mensaje de quién ganó.


3. Descarga de archivos:
Crea una función descargarArchivo que simule la descarga de un archivo.
La función debe devolver una promesa que se resuelve con un mensaje como "Archivo descargado" después de un tiempo aleatorio (entre 2 y 4 segundos).
Usa setTimeout para simular la descarga.
Crea una función main asíncrona que llame a descargarArchivo y maneje la resolución de la promesa con then.


4. Obtener datos de una API (simulado):
Crea una función obtenerDatosAPI que simule la obtención de datos de una API.
La función debe devolver una promesa que se resuelve con un objeto de datos ficticios (por ejemplo, un arreglo de productos o usuarios) después de un breve retraso.
Usa setTimeout para simular la solicitud a la API.
Crea una función mostrarDatos asíncrona que llame a obtenerDatosAPI y muestre los datos en la consola.


5. Validar un formulario (simulado):
Crea una función validarFormulario que simule la validación de un formulario.
La función debe devolver una promesa que se resuelve con un mensaje como "Formulario válido" si la validación es exitosa, o se rechaza con un mensaje de error si hay errores en el formulario.
Usa un condicional para simular la validación (por ejemplo, si todos los campos están llenos).
Crea una función enviarFormulario asíncrona que llame a validarFormulario y maneje la resolución y el rechazo de la promesa.


6. Obtener información del usuario (simulado):
Crea una función obtenerInfoUsuario que simule la obtención de información de un usuario.
La función debe devolver una promesa que se resuelve con un objeto de información de usuario ficticio (por ejemplo, nombre, edad, etc.) después de un breve retraso.
Usa setTimeout para simular la obtención de la información.
Crea una función mostrarInfo asíncrona que llame a obtenerInfoUsuario y muestre la información en la consola.


7. Buscar un producto (simulado):
Crea una función buscarProducto que simule la búsqueda de un producto en una base de datos.
La función debe devolver una promesa que se resuelve con un objeto de producto ficticio si se encuentra, o se rechaza con un mensaje de error si no se encuentra.
Usa un condicional para simular la búsqueda.
Crea una función mostrarProducto asíncrona que llame a buscarProducto y maneje la resolución y el rechazo de la promesa.


8. Calcular el factorial de un número:
Crea una función calcularFactorial que calcule el factorial de un número dado.
La función debe devolver una promesa que se resuelve con el resultado del factorial.
Usa un bucle para calcular el factorial.
Crea una función mostrarFactorial asíncrona que llame a calcularFactorial y muestre el resultado en la consola.


9. Verificar la conexión a internet (simulado):
Crea una función verificarConexion que simule la verificación de la conexión a internet.
La función debe devolver una promesa que se resuelve con un mensaje como "Conectado" si hay conexión, o se rechaza con un mensaje de error si no hay conexión.
Usa un condicional para simular la verificación (por ejemplo, un valor booleano que indica si hay conexión).
Crea una función main asíncrona que llame a verificarConexion y maneje la resolución y el rechazo de la promesa.


10. Simular una secuencia de tareas:
Crea tres funciones asíncronas (por ejemplo, tarea1, tarea2, tarea3) que simulen tareas independientes, cada una con un retraso aleatorio.
Crea una función main asíncrona que ejecute las tres tareas de forma secuencial, esperando a que cada tarea termine antes de ejecutar la siguiente.
Usa await para esperar la resolución de cada promesa.