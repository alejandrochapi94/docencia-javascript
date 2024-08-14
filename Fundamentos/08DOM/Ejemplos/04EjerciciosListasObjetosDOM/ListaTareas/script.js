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