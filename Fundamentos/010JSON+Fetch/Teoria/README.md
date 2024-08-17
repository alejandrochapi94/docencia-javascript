# Archivos JSON

¿Qué son los archivos JSON?

JSON significa "JavaScript Object Notation" (Notación de Objetos de JavaScript). Es un formato de texto simple para almacenar y transferir datos, que es:
Ligero: Fácil de leer y escribir, incluso para humanos.
Independiente del lenguaje: Se puede usar con cualquier lenguaje de programación.
Flexible: Permite organizar datos en estructuras jerárquicas (como objetos y arreglos).
¿Cómo funcionan los archivos JSON?
Los archivos JSON se basan en dos estructuras de datos principales:
Objetos: Parecen diccionarios en Python. Tienen pares clave-valor.
Arreglos: Parecen listas en Python. Contienen una colección ordenada de elementos.

```json
{
  "nombre": "Juan",
  "edad": 30,
  "ciudad": "Madrid",
  "hobbies": ["leer", "correr", "cocinar"],
  "esEstudiante": false
}
```

Para qué se usa JSON:
Intercambio de datos entre servidor y cliente: Es ideal para enviar datos de una aplicación web a un servidor o viceversa.
Almacenamiento de datos local: Se puede utilizar para guardar configuración, preferencias o datos del usuario en el navegador.
Configuración de aplicaciones: Se usa para definir ajustes y parámetros de aplicaciones.
Trabajar con archivos JSON desde JavaScript:
JavaScript tiene la capacidad de leer y escribir datos JSON de forma nativa. Puedes utilizar los objetos JSON.parse() y JSON.stringify():
JSON.parse(): Convierte una cadena JSON en un objeto JavaScript.

```javascript
let datos = '{"nombre": "Ana", "edad": 25}';
let objeto = JSON.parse(datos);
console.log(objeto.nombre); // Imprime "Ana"
```

JSON.stringify(): Convierte un objeto JavaScript en una cadena JSON.

```javascript
let persona = {
  nombre: "Pedro",
  edad: 32,
  ciudad: "Barcelona"
};
let json = JSON.stringify(persona);
console.log(json); // Imprime '{"nombre": "Pedro", "edad": 32, "ciudad": "Barcelona"}'

```

Ejemplo práctico:
Imaginemos que tenemos un archivo JSON llamado productos.json con la siguiente información:

```javascript
[
  {
    "id": 1,
    "nombre": "Camiseta",
    "precio": 15.99
  },
  {
    "id": 2,
    "nombre": "Pantalón",
    "precio": 35.50
  }
]

fetch('productos.json')
  .then(response => response.json())
  .then(productos => {
    let lista = document.getElementById('lista-productos');
    productos.forEach(producto => {
      let item = document.createElement('li');
      item.textContent = `${producto.nombre} - $${producto.precio}`;
      lista.appendChild(item);
    });
  });
```

Este código:
Utiliza fetch() para obtener el contenido del archivo productos.json.
Convierte la respuesta a un objeto JavaScript con response.json().
Itera sobre cada producto del arreglo y crea un elemento li con su nombre y precio.
Agrega los elementos li a la lista con id lista-productos.

## Conclusión

1. Validación de JSON:
¿Cómo aseguro que un archivo JSON esté correctamente formateado?
Puedes usar herramientas en línea como JSONLint (https://jsonlint.com/) o integrar validadores en tu editor de código.
En JavaScript, puedes utilizar JSON.parse() para validar la estructura JSON. Si el JSON no es válido, JSON.parse() lanzará un error.
2. Manejo de errores:
¿Qué ocurre si el archivo JSON no se encuentra o si contiene errores?
Siempre usa try...catch para manejar posibles errores al leer o analizar archivos JSON.
En el bloque catch, puedes mostrar un mensaje al usuario o tomar acciones alternativas.
3. Interacción con APIs:
¿Cómo obtengo datos JSON de una API web?
Usa fetch() o bibliotecas como Axios para realizar solicitudes HTTP a una API.
La mayoría de las APIs devuelven datos en formato JSON.
4. Manipulación de datos JSON:
¿Cómo accedo y modifico la información dentro de un archivo JSON?
Una vez que tengas el objeto JSON en JavaScript, puedes acceder a sus propiedades y valores usando la notación de punto (.) o corchetes ([]).
Puedes modificar el objeto JSON directamente.
5. Conversión de datos:
¿Cómo convierto datos JSON a otros formatos?
Puedes convertir JSON a XML, CSV o HTML usando JavaScript y librerías de terceros.
6. Serialización y deserialización:
¿Cómo guardo y recupero datos JSON en el navegador?
Usa localStorage o sessionStorage del navegador para almacenar y recuperar datos JSON.
7. Frameworks y herramientas:
¿Existen herramientas que me simplifiquen el trabajo con JSON?
Hay frameworks como Angular, React y Vue.js que facilitan la integración de JSON en aplicaciones web.
Hay herramientas de línea de comandos como jq (https://stedolan.github.io/jq/) que permiten manipular JSON de forma rápida y eficiente.