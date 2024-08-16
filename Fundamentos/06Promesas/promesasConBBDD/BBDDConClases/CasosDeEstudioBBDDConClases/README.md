# Casos de estudio para manejo de mysql con javascript mediante el uso de clases


### Ejercicio 1: Manejo de Productos en una Base de Datos


Crea una clase base Database que maneje la conexión a la base de datos y otra clase derivada ProductDatabase que se encargue de manejar operaciones específicas de productos, como insertar, actualizar y eliminar productos en una tabla llamada productos.

Implementa métodos para insertar un nuevo producto, actualizar el precio de un producto existente, y eliminar un producto por su ID.
Asegúrate de manejar la conexión y cierre de la base de datos de manera adecuada.

### Ejercicio 2: Registro de Usuarios con Validación
Crea una clase base Database para la conexión y una clase derivada UserDatabase que maneje el registro de usuarios en una tabla llamada usuarios.

Implementa un método registrarUsuario que verifique si un correo electrónico ya está registrado antes de insertar un nuevo usuario.
Si el correo ya está registrado, lanza un error. Si no, inserta el nuevo usuario.
Añade métodos para buscar usuarios por correo y listar todos los usuarios registrados.


### Ejercicio 3: Gestión de Pedidos en una Tienda
Crea una clase base Database y una clase derivada OrderDatabase que maneje la gestión de pedidos en una tabla llamada pedidos.

Implementa métodos para insertar un nuevo pedido, actualizar el estado de un pedido (por ejemplo, de "pendiente" a "enviado"), y listar todos los pedidos de un usuario específico.
Utiliza transacciones para asegurar que las operaciones de inserción y actualización se realicen de manera atómica.


### Ejercicio 4: Biblioteca Digital
Crea una clase base Database y una clase derivada LibraryDatabase para manejar una biblioteca digital.

Implementa métodos para insertar nuevos libros en una tabla libros, buscar libros por título o autor, y eliminar libros por su ID.
Añade un método para listar todos los libros disponibles y otro para buscar libros por género.
Asegúrate de manejar adecuadamente los errores y el cierre de la conexión.


### Ejercicio 5: Sistema de Reservas de Hotel
Crea una clase base Database y una clase derivada BookingDatabase para manejar reservas de hotel en una tabla reservas.

Implementa métodos para insertar una nueva reserva, actualizar los datos de una reserva (como la fecha de check-in o check-out), y eliminar una reserva por su ID.
Añade un método para listar todas las reservas de un cliente específico.
Utiliza promesas y async/await para manejar todas las operaciones de manera asíncrona, asegurándote de cerrar la conexión después de cada operación.