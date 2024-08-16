const mysql = require('mysql2/promise');

async function insertarDatos(nombre, correo) {
  try {
    // Crear una conexión a la base de datos
    const connection = await mysql.createConnection({
      host: 'localhost',        // Cambia esto si tu servidor MySQL no está en localhost
      user: 'root',             // Reemplaza con tu usuario de MySQL
      password: 'root',         // Reemplaza con tu contraseña de MySQL
      database: 'alejo5'        // Reemplaza con el nombre de tu base de datos
    });

    console.log('Conexión exitosa a la base de datos');

    // Consulta SQL para insertar datos
    const query = 'INSERT INTO tu_tabla3 (nombre, correo) VALUES (?, ?)';

    // Ejecutar la consulta con los valores de las variables
    const [result] = await connection.execute(query, [nombre, correo]);

    console.log('Datos insertados:', result);

    // Cerrar la conexión
    await connection.end();
    console.log('Conexión cerrada');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Llamar a la función insertarDatos para enviar los datos
insertarDatos('Alejandro11', 'alejandro1@example.com');
