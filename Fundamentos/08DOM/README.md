# Tutorial manejo básico del DOM

Manejo de funciones para pedir datos desde el DOM

## Primrea forma: manejando eventos capturados del botón
``` javascript
<input type="number" id="numberInput">
<button id="calculateButton">Calcular</button>
<input type="text" id="resultTextbox" readonly>


document.getElementById('calculateButton').addEventListener('click', function() {
    // Obtener el valor del input
    let number = document.getElementById('numberInput').value;
    // Convertir a número y realizar operación
    let result = number * 2;
    // Mostrar resultado en el textbox
    document.getElementById('resultTextbox').value = 'Resultado: ' + result;
    // Mostrar mensaje de éxito
    alert('La operación se realizó exitosamente');
  });
```
### Utilizando eventos que llaman a funciones previamente declaradas

``` javascript
    <input type="number" id="numero1" placeholder="Número 1">
    <input type="number" id="numero2" placeholder="Número 2">
    <button id="suma">+</button>
    

    const numero1Input = document.getElementById("numero1");
    const numero2Input = document.getElementById("numero2");
    const resultadoParrafo = document.getElementById("resultado");


    function suma(a, b) {
        return a + b;
    }
    document.getElementById("suma").addEventListener("click", function() {
        const numero1 = parseFloat(numero1Input.value);
        const numero2 = parseFloat(numero2Input.value);
        resultadoParrafo.textContent = suma(numero1, numero2);
    });
    

```
### Declarando funciones internas dentro del evento
``` javascript
<body>
    <input type="number" id="precio" placeholder="Precio Original">
    <input type="number" id="descuento" placeholder="Descuento (%)">
    <button id="calcular">Calcular Precio Final</button>
    <p id="resultado"></p>

    <script>
        const precioInput = document.getElementById("precio");
        const descuentoInput = document.getElementById("descuento");
        const resultadoParrafo = document.getElementById("resultado");

        function calcularPrecioFinal(precio, descuento) {
            const descuentoValor = precio * (descuento / 100);
            return precio - descuentoValor;
        }

        document.getElementById("calcular").addEventListener("click", function() {
            const precio = parseFloat(precioInput.value);
            const descuento = parseFloat(descuentoInput.value);
            resultadoParrafo.textContent = `El precio final es: ${calcularPrecioFinal(precio, descuento)}`;
        });
    </script>
</body>
```
### Devolviendo valores dentro de un input
``` javascript
<input type="number" id="numberInput">
<button id="calculateButton">Calcular</button>
<input type="text" id="resultTextbox" readonly>

<script>
  document.getElementById('calculateButton').addEventListener('click', function() {
    // Obtener el valor del input
    let number = document.getElementById('numberInput').value;
    
    // Convertir a número y realizar operación
    let result = number * 2;
    
    // Mostrar resultado en el textbox
    document.getElementById('resultTextbox').value = 'Resultado: ' + result;
  });
</script>
```
### Modificando el valor preestablecido de un párrafo
``` javascript
<p id="textParagraph">Este es el texto original.</p>
<button id="changeTextButton">Cambiar Texto</button>

<script>
  document.getElementById('changeTextButton').addEventListener('click', function() {
    // Cambiar el texto del párrafo
    document.getElementById('textParagraph').textContent = 'El texto ha sido cambiado!';
  });
</script>
```
## Segunda forma de utilizar funciones y botones

Utilizando funciones para llamar desde el botón y mostrarlo reemplazando el valor de un párrafo previamente definido
``` javascript
<body>
    <h1>Pedir Datos desde HTML</h1>
    <input type="number" id="numero1" placeholder="Ingresa el primer número">
    <input type="number" id="numero2" placeholder="Ingresa el segundo número">
    <button onclick="compararNumeros()">Comparar</button>
    <p id="resultado"></p>

    <!-- Enlace al archivo JavaScript externo -->
    <script>
        function compararNumeros() {
    // Obtener los valores de los inputs
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    // Verificar cuál número es mayor
    let mensaje;
    if (numero1 > numero2) {
        mensaje = `El número ${numero1} es mayor que ${numero2}`;
    } else if (numero1 < numero2) {
        mensaje = `El número ${numero2} es mayor que ${numero1}`;
    } else {
        mensaje = `Ambos números son iguales (${numero1})`;
    }

    // Mostrar el resultado
    document.getElementById('resultado').innerText = mensaje;
}

    </script>
</body>
```
### Crear elementos desde javascript 
``` javascript


```
### Crear elementos li desde javascript
``` javascript
<body>
  <ul id="miLista"></ul>
  <button id="agregarBtn">Agregar Item</button>

  <script>
    // Obtener referencias a los elementos del DOM
    const miLista = document.getElementById("miLista");
    const agregarBtn = document.getElementById("agregarBtn");

    // Función para agregar un nuevo item a la lista
    function agregarItem() {
      // Crear un nuevo elemento <li>
      const nuevoItem = document.createElement("li");

      // Asignar texto al elemento <li>
      nuevoItem.textContent = "Nuevo item en la lista";

      // Agregar el nuevo item a la lista
      miLista.appendChild(nuevoItem);
    }

    // Agregar un evento "click" al botón
    agregarBtn.addEventListener("click", agregarItem);
  </script>
</body>
```
### Mostrar elementos li desde javascript (enviando datos)
``` javascript
<body>
    <h1>Lista de Compras</h1>

    <input type="text" id="item-input" placeholder="Agrega un item...">
    <button id="agregar-btn">Agregar</button>

    <div id="lista-compras">
        <ul></ul>
    </div>

    <script>
        // Obtener referencias a los elementos del DOM
        const inputItem = document.getElementById("item-input");
        const agregarBtn = document.getElementById("agregar-btn");
        const listaCompras = document.querySelector("#lista-compras ul");

        // Agregar un evento "click" al botón "Agregar"
        agregarBtn.addEventListener("click", () => {
            // Obtener el valor del campo de texto
            const newItem = inputItem.value;

            // Si el campo de texto no está vacío
            if (newItem !== "") {
                // Crear un nuevo elemento "li" para el item
                const nuevoItem = document.createElement("li");
                nuevoItem.textContent = newItem;

                // Agregar un botón "Eliminar" al item
                const btnEliminar = document.createElement("button");
                btnEliminar.textContent = "Eliminar";
                btnEliminar.addEventListener("click", () => {
                    // Eliminar el item de la lista
                    listaCompras.removeChild(nuevoItem);
                });
                //nuevoItem.appendChild(btnEliminar);

                // Agregar el nuevo item a la lista
                listaCompras.appendChild(nuevoItem);

                // Limpiar el campo de texto
                inputItem.value = "";
            }
        });
    </script>
</body>
```
### Crear elementos incluido botones desde javascript
``` javascript
<body>
    <h1>Lista de Compras</h1>

    <input type="text" id="item-input" placeholder="Agrega un item...">
    <button id="agregar-btn">Agregar</button>

    <div id="lista-compras">
        <ul></ul>
    </div>

    <script>
        // Obtener referencias a los elementos del DOM
        const inputItem = document.getElementById("item-input");
        const agregarBtn = document.getElementById("agregar-btn");
        const listaCompras = document.querySelector("#lista-compras ul");

        // Función para agregar un item a la lista
        function agregarItem() {
            // Obtener el valor del campo de texto
            const newItem = inputItem.value;

            // Si el campo de texto no está vacío
            if (newItem !== "") {
                // Crear un nuevo elemento "li" para el item
                const nuevoItem = document.createElement("li");
                nuevoItem.textContent = newItem;

                // Agregar un botón "Eliminar" al item
                const btnEliminar = document.createElement("button");
                btnEliminar.textContent = "Eliminar";
                btnEliminar.addEventListener("click", function() {
                    // Eliminar el item de la lista
                    listaCompras.removeChild(nuevoItem);
                });
                nuevoItem.appendChild(btnEliminar);

                // Agregar el nuevo item a la lista
                listaCompras.appendChild(nuevoItem);

                // Limpiar el campo de texto
                inputItem.value = "";
            }
        }

        // Agregar un evento "click" al botón "Agregar"
        agregarBtn.addEventListener("click", agregarItem);
    </script>
</body>
```
# Ejemplo lista de tareas completo 
``` javascript
<h1>Lista de Tareas</h1>

  <input type="text" id="tareaInput" placeholder="Agrega una tarea">
  <button id="agregarTarea">Agregar</button>

  <ul id="listaTareas"></ul>

const tareaInput = document.getElementById("tareaInput");
const agregarTareaBtn = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");

let tareas = []; // Array vacío para almacenar las tareas

agregarTareaBtn.addEventListener("click", function() {
  const nuevaTarea = tareaInput.value;
  if (nuevaTarea !== "") { // Verifica que el campo no esté vacío
    tareas.push({ tarea: nuevaTarea, completada: false }); // Agrega la nueva tarea al array
    actualizarLista(); // Actualiza la lista en el DOM
    tareaInput.value = ""; // Limpia el campo de texto
  }
});

function actualizarLista() {
  listaTareas.innerHTML = ""; // Limpia la lista actual

  for (let i = 0; i < tareas.length; i++) {
    const tarea = tareas[i];
    const itemLista = document.createElement("li");
    itemLista.textContent = tarea.tarea;

    if (tarea.completada) {
      itemLista.classList.add("completada"); // Agrega una clase para marcar la tarea como completada
    }

    listaTareas.appendChild(itemLista);
  }
}
```
# Lista de tareas completa con botón de completado y eliminar


# Resumen

Acceso a Elementos del DOM:

Métodos para seleccionar elementos:

document.getElementById('id'): Selecciona un elemento por su ID.
document.querySelector('selector'): Selecciona el primer elemento que coincide con el selector CSS.
document.querySelectorAll('selector'): Selecciona todos los elementos que coinciden con el selector CSS.

2. Manipulación del DOM:

Cambiar contenido de un elemento:
element.textContent: Cambia el texto dentro de un elemento.
element.innerHTML: Cambia el HTML dentro de un elemento.
Modificar atributos:
element.setAttribute('attribute', 'value'): Cambia el valor de un atributo.
Modificar estilos:
element.style.property = 'value': Cambia el estilo de un elemento.

3. Eventos en el DOM:

Agregar eventos:
element.addEventListener('event', function): Escucha un evento como 'click', 'input', 'submit', etc., y ejecuta una función cuando ocurre.
Eventos comunes:
click, input, change, submit, mouseover, etc.

4. Operaciones en JavaScript:

Una vez que obtienes datos del DOM, puedes realizar cualquier operación de JavaScript con esos datos, como manipular strings, realizar cálculos matemáticos, etc.

5. Actualizar el DOM:

Después de realizar una operación en JavaScript, puedes actualizar el DOM para mostrar el resultado usando los métodos mencionados anteriormente (textContent, innerHTML, etc.).