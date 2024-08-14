## Ejercicios (Casos de estudio) para aprender el manejo de promesas (incluye listas, objetos y manejo de errores)

### Ejercicio 1

Simulación de una API de Productos
Descripción: Vas a simular una llamada a una API que devuelve una lista de productos. Cada producto tendrá un nombre, precio y categoría. Utilizarás promesas, async/await, y trabajarás con arrays y objetos.

Instrucciones:

Crea una función fetchProducts que simule una llamada a una API utilizando setTimeout y devuelva una promesa que se resuelva con un array de objetos (productos).
Usa async/await para esperar la respuesta de fetchProducts.
Itera sobre el array de productos para crear un nuevo array que contenga solo los productos de una categoría específica (por ejemplo, "Electrónica").
Maneja los errores si la promesa falla utilizando try...catch.


### Ejercicio 2

Manejo de Usuarios en una Aplicación
Descripción: Vas a simular una aplicación que maneja usuarios. La aplicación permitirá agregar, eliminar, y actualizar usuarios, utilizando promesas y manejando errores.

Instrucciones:

Crea un array vacío llamado users.
Crea funciones addUser, removeUser, y updateUser que devuelvan promesas.
Usa async/await para agregar, eliminar, y actualizar usuarios en el array.
Maneja los errores utilizando try...catch.

### Ejercicio 3

Consulta de Datos en un API Ficticio
Descripción: Vas a simular una consulta a una API que devuelva información de varias ciudades (nombre, población, país). Utilizarás promesas y async/await para manejar la consulta y luego aplicar métodos de array para filtrar y transformar los datos.

Instrucciones:

Crea una función fetchCities que simule una llamada a una API y devuelva un array de objetos con datos de ciudades.
Usa async/await para obtener los datos de las ciudades.
Filtra las ciudades que pertenezcan a un país específico (por ejemplo, "España") y calcula la población total de esas ciudades.
Utiliza try...catch para manejar cualquier error en la consulta de datos.

### Ejercicio 4

Simulación de un Proceso de Compra
Descripción: Simula un proceso de compra en una tienda online. Utilizarás objetos para representar productos, arrays para manejar el carrito de compras, y promesas para simular el proceso de compra. Incluye manejo de errores si el proceso falla.

Instrucciones:

Crea un array cart que contenga varios productos (objetos con nombre, precio, cantidad).
Crea una función processOrder que simule el proceso de compra y devuelva una promesa.
Usa async/await para esperar la finalización del proceso de compra y luego calcular el total a pagar.
Maneja errores utilizando try...catch.