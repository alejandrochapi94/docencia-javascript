# Ejercicios para desarrollar en clase


Ejercicio 1: Tienda de Productos

Objetivo: Crear un sistema simple para manejar información de productos en una tienda, utilizando promesas, async/await y herencia.
Descripción:
Clase Product:
Debe tener las propiedades name y price.
Implementar el método getDetails(), que devuelve una promesa que resuelve con una cadena de texto que incluye el nombre y el precio del producto después de un retraso simulado de 1 segundo.
Clase ElectronicProduct:
Debe heredar de la clase Product y tener una propiedad adicional brand.
Implementar el método getBrand(), que devuelve una promesa que resuelve con la marca del producto después de un retraso simulado de 1 segundo.
Función displayProductDetails():
Recibe un objeto Product como parámetro.
Utiliza async/await para obtener los detalles del producto, incluyendo la marca si es un producto electrónico.
Imprime los detalles del producto en la consola.


Ejercicio 2: Gestión de Empleados

Objetivo: Modelar un sistema simple para gestionar información de empleados en una empresa, utilizando promesas, async/await y herencia.
Descripción:
Clase Employee:
Debe tener las propiedades name y salary.
Implementar el método getEmployeeInfo(), que devuelve una promesa que resuelve con una cadena de texto que incluye el nombre y el salario del empleado después de un retraso simulado de 1 segundo.
Clase Manager:
Debe heredar de la clase Employee y tener una propiedad adicional team.
Implementar el método getTeamInfo(), que devuelve una promesa que resuelve con el nombre del equipo del gerente después de un retraso simulado de 1 segundo.
Función displayEmployeeInfo():
Recibe un objeto Employee como parámetro.
Utiliza async/await para obtener la información del empleado, incluyendo la información del equipo si es un gerente.
Imprime la información del empleado en la consola.

Ejercicio 3: órdenes de compra

Objetivo: Modelar un sistema simple para gestionar pedidos en una tienda, utilizando promesas, async/await y herencia.
Descripción:
Clase Order:
Debe tener la propiedad items (un arreglo de objetos de producto).
Implementar el método getTotalPrice(), que devuelve una promesa que resuelve con el precio total del pedido después de un retraso simulado de 1 segundo.
Clase PriorityOrder:
Debe heredar de la clase Order y tener una propiedad adicional deliveryTime.
Implementar el método getDeliveryTime(), que devuelve una promesa que resuelve con el tiempo de entrega del pedido después de un retraso simulado de 1 segundo.
Función processOrder():
Recibe un objeto Order como parámetro.
Utiliza async/await para calcular el precio total del pedido y, si es un pedido prioritario, también para obtener el tiempo de entrega.
Imprime la información del pedido en la consola.