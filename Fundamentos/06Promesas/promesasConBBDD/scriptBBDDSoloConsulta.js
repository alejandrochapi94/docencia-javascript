const mysql = require('mysql2/promise');

async function main() {
  try {
    // Crear una conexión a la base de datos
    const connection = await mysql.createConnection({
      host: 'localhost',        // Cambia esto si tu servidor MySQL no está en localhost
      user: 'root',             // Reemplaza con tu usuario de MySQL
      password: 'root',         // Reemplaza con tu contraseña de MySQL
      database: 'alejo5'        // Reemplaza con el nombre de tu base de datos
    });

    console.log('Conexión exitosa a la base de datos');

    // Ejecutar una consulta
    const [results] = await connection.query('SELECT * FROM tu_tabla3');
    console.log('Resultados de la consulta:', results);

    // Cerrar la conexión
    await connection.end();
    console.log('Conexión cerrada');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Llamar a la función main para ejecutar el código
main();
