/*
Implementa una clase Database en Node.js que permita conectarse a una base de 
datos MySQL, insertar datos y cerrar la conexión. La clase debe contener los 
siguientes métodos:
connect(): Conecta a la base de datos utilizando las credenciales proporcionadas.
 Debe manejar los errores que puedan ocurrir durante la conexión.
insertarDatos(nombre, correo): Inserta datos en una tabla especificada, utilizando
 los parámetros nombre y correo. Debe verificar si existe una conexión activa a la 
 base de datos, conectarse si es necesario y ejecutar la consulta SQL. Debe 
 manejar los errores que puedan ocurrir durante la inserción.
close(): Cierra la conexión a la base de datos. Debe manejar los errores que 
puedan ocurrir durante el cierre.
Datos a utilizar:
Base de datos: user
Tabla: tabla_clientes
Campos: nombre, correo
Requisitos:
Utiliza la librería mysql2/promise para conectarse a la base de datos.
Crea una función main() que llame al método insertarDatos() para insertar un registro con el nombre Alejandro11 y el correo alejandro1@example.com.
Asegúrate de que la conexión a la base de datos se cierre correctamente después de la inserción.

*/

const mysql = require('mysql2/promise');

class Database {
  constructor(config) {
    this.config = config;
  }

  // Método para conectar a la base de datos
  async connect() {
    try {
      this.connection = await mysql.createConnection(this.config);
      console.log('Conexión exitosa a la base de datos');
    } catch (err) {
      console.error('Error al conectar a la base de datos:', err);
      throw err; // Lanzamos el error para que pueda ser manejado externamente si es necesario
    }
  }
  async consultar(sql, params = []) {
    try {
      const [result] = await this.connection.execute(sql, params);
      return result;
    } catch (err) {
      console.error('Error al realizar la consulta:', err);
      throw err;
    }
  }

  // Método para insertar datos en la base de datos
  async insertarDatos(nombre, correo) {
    try {
      // Si no hay una conexión activa, conectarse
      if (!this.connection) {
        await this.connect();
      }

      // Consulta SQL para insertar datos
      const query = 'INSERT INTO tu_tabla3 (nombre, correo) VALUES (?, ?)';

      // Ejecutar la consulta con los valores de las variables
      const [result] = await this.connection.execute(query, [nombre, correo]);

      console.log('Datos insertados:', result);
      return result; // Devolvemos el resultado por si es necesario en otra parte del código

    } catch (err) {
      console.error('Error al insertar datos:', err);
      throw err;
    }
  }

  // Método para cerrar la conexión a la base de datos
  async close() {
    try {
      if (this.connection) {
        await this.connection.end();
        console.log('Conexión cerrada');
      }
    } catch (err) {
      console.error('Error al cerrar la conexión:', err);
      throw err;
    }
  }
}

// Configuración de la base de datos
const config = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'alejo5'
};

// Crear una instancia de la clase Database
const db = new Database(config);

// Función principal para manejar la inserción de datos
async function main() {
  try {
    // Llamar al método para insertar datos
    await db.insertarDatos('Alejandro112', 'alejandro12@example.com');
  } catch (err) {
    console.error('Error en la operación principal:', err);
  } finally {
    // Asegurarse de cerrar la conexión
    await db.close();
  }
}

// Ejecutar la función principal
main();
