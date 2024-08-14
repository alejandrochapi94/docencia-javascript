// Importar el paquete mysql2
const mysql = require('mysql2');

// Crear una conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',        // Cambia esto si tu servidor MySQL no está en localhost
  user: 'root',       // Reemplaza con tu usuario de MySQL
  password: 'root', // Reemplaza con tu contraseña de MySQL
  database: 'alejo5' // Reemplaza con el nombre de tu base de datos
});

// Conectar a MySQL
connection.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

connection.query('SELECT * FROM tu_tabla3', (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      return;
    }
    console.log('Resultados de la consulta:', results);
  });
  

// Cerrar la conexión (opcional, puedes mantenerla abierta según tus necesidades)
connection.end();
