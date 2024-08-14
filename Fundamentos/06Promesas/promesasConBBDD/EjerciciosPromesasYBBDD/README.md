# Ejercicios para la práctica de las promesas y la asincronía con bases de datos

### Ejercicio 1: 

Sistema de Gestión de Tareas
Objetivo: Crear un sistema para gestionar tareas pendientes, aplicando todos los conceptos.

Creación del sistema: Desarrolla un sistema que permita agregar, listar, actualizar y eliminar tareas. Cada tarea debe tener propiedades como id, title, description, status (pendiente, en progreso, completada).
Almacenamiento de datos: Usa un array para almacenar las tareas en memoria y ofrece la opción de guardarlas en una base de datos MySQL.
Asincronía: Implementa funciones asíncronas para simular operaciones como guardar y recuperar tareas desde la base de datos. Utiliza async y await para manejar estas operaciones.
Manejo de errores: Asegúrate de manejar correctamente los errores al interactuar con la base de datos, por ejemplo, cuando se intenta actualizar una tarea que no existe.

### Ejercicio 2: 

Sistema de Reserva de Vehículos
Objetivo: Crear un sistema de reserva de vehículos para una empresa de alquiler.

Creación del sistema: Desarrolla un sistema que permita a los usuarios reservar vehículos. Cada reserva debe tener propiedades como id, customerName, vehicleType, reservationDate, y returnDate.
Conexión con MySQL: Crea una tabla en MySQL para almacenar las reservas. Implementa funciones para agregar una nueva reserva, listar todas las reservas, actualizar y cancelar una reserva.

Simulación de datos: Utiliza funciones asíncronas para simular la disponibilidad de los vehículos y actualizar el estado de la reserva en la base de datos.

### Ejercicio 3: 

Sistema de Inventario de Productos
Objetivo: Crear un sistema de inventario para una tienda.

Creación del sistema: Desarrolla un sistema para gestionar el inventario de productos en una tienda. Cada producto debe tener propiedades como id, name, category, price, stock.
Integración con MySQL: Crea una tabla en MySQL para almacenar los productos. Implementa funciones para agregar, listar, actualizar, y eliminar productos.

Asincronía y manejo de stock: Implementa una función que simule una venta, reduciendo el stock del producto vendido y actualizando la base de datos. Asegúrate de manejar casos donde el stock es insuficiente.

### Ejercicio 4: 

Sistema de Gestión de Empleados
Objetivo: Desarrollar un sistema para gestionar los empleados de una empresa.

Creación del sistema: Desarrolla un sistema que permita agregar, listar, actualizar, y eliminar empleados. Cada empleado debe tener propiedades como id, name, position, salary, hireDate.
Conexión a base de datos: Implementa la conexión a una base de datos MySQL y crea una tabla para almacenar la información de los empleados.

Operaciones asíncronas: Utiliza async y await para realizar las operaciones de CRUD en la base de datos. Simula operaciones como la revisión de salario y la actualización de la información de un empleado.


### Ejercicio 5: 

Sistema de Gestión de Órdenes de Compra
Objetivo: Crear un sistema para gestionar órdenes de compra en una empresa.

Creación del sistema: Desarrolla un sistema que permita gestionar órdenes de compra, cada orden debe tener propiedades como id, customerName, orderDate, items (que es un array de productos), totalAmount.
Base de datos: Implementa una base de datos MySQL con dos tablas: una para las órdenes y otra para los detalles de los ítems de cada orden.
Asincronía y operaciones CRUD: Utiliza async y await para crear nuevas órdenes, listar todas las órdenes, y actualizar o eliminar una orden existente.