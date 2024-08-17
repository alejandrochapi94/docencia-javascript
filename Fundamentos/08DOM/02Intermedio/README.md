# Uso de funciones en formularios

1. Usando el nombre de la función en el botón:
Sintaxis: Se coloca el nombre de la función JavaScript dentro del atributo onclick del botón.
Ejemplo:


```javascript
<button onclick="miFuncion()">Click me!</button>
<script>
  function miFuncion() {
    alert("¡Hola desde miFuncion!");
  }
</script>
```

Funcionamiento: Cuando se hace clic en el botón, la función miFuncion() se ejecuta.
Desventaja: Si la función tiene parámetros, no es sencillo pasarlos con esta sintaxis.
2. ¿Se puede aplicar a formularios?
Sí: Se puede aplicar a un botón submit dentro de un formulario, pero no se recomienda para eventos submit en general.
Ejemplo:

```javascript
<form onsubmit="handleSubmit()">
  <button type="submit">Enviar</button>
</form>
<script>
  function handleSubmit() {
    // ...
  }
</script>

```

Desventaja: Esta práctica puede ser confusa y dificulta la gestión de los eventos del formulario, especialmente si hay más de un botón de envío o si se necesitan parámetros adicionales.


3. ¿Por qué addEventListener es mejor?

Modularidad y organización: addEventListener permite separar la lógica del evento del HTML, lo que facilita la gestión del código.
Flexibilidad: Puedes agregar y eliminar oyentes de eventos de forma dinámica, lo que ofrece mayor flexibilidad.
Múltiples eventos: Puedes agregar varios oyentes de eventos a un mismo elemento.
Sintaxis más clara: La sintaxis de addEventListener es más legible y fácil de comprender.
En resumen:
Evita usar el nombre de la función directamente en el botón submit de un formulario.
Utiliza addEventListener para una mejor organización, flexibilidad y legibilidad.

Recomendación:
Para los formularios: Utiliza addEventListener para el evento submit del formulario.
Para botones simples: Puedes usar el nombre de la función en el atributo onclick si la función no tiene parámetros o si la lógica es muy simple.