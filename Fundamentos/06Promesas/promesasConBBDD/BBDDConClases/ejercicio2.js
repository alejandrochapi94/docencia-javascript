const mysql = require('mysql2/promise');

// Clase base que maneja la conexión a la base de datos
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

// Clase derivada que extiende la clase Database
class UserDatabase extends Database {
  constructor(config) {
    super(config); // Llama al constructor de la clase base
  }

  // Método para insertar un usuario en la base de datos
  async insertarUsuario(nombre, correo) {
    try {
      // Si no hay una conexión activa, conectarse
      if (!this.connection) {
        await this.connect();
      }

      // Consulta SQL para insertar datos
      const query = 'INSERT INTO tu_tabla3 (nombre, correo) VALUES (?, ?)';

      // Ejecutar la consulta con los valores de las variables
      const [result] = await this.connection.execute(query, [nombre, correo]);

      console.log('Usuario insertado:', result);
      return result;

    } catch (err) {
      console.error('Error al insertar usuario:', err);
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

// Crear una instancia de la clase UserDatabase
const userDb = new UserDatabase(config);

// Función principal para manejar la inserción de usuarios
async function main() {
  try {
    // Llamar al método para insertar un usuario
    await userDb.insertarUsuario('Alejandrop', 'alejandrop@example.com');
  } catch (err) {
    console.error('Error en la operación principal:', err);
  } finally {
    // Asegurarse de cerrar la conexión
    await userDb.close();
  }
}

// Ejecutar la función principal
main();
