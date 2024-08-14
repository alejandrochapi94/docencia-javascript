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