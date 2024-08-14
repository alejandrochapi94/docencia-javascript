const tareaInput = document.getElementById("tareaInput");
const agregarTareaBtn = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");

let tareas = []; 

agregarTareaBtn.addEventListener("click", function() {
  const nuevaTarea = tareaInput.value;
  if (nuevaTarea !== "") {
    tareas.push({ tarea: nuevaTarea, completada: false });
    actualizarLista();
    tareaInput.value = "";
  }
});

function actualizarLista() {
  listaTareas.innerHTML = "";

  for (let i = 0; i < tareas.length; i++) {
    const tarea = tareas[i];
    const itemLista = document.createElement("li");
    itemLista.textContent = tarea.tarea;

    if (tarea.completada) {
      itemLista.classList.add("completada");
    }

    // Botón de marcar como completada
    const completarBtn = document.createElement("button");
    completarBtn.textContent = "Completar";
    completarBtn.addEventListener("click", function() {
      tareas[i].completada = !tareas[i].completada;
      actualizarLista();
    });
    itemLista.appendChild(completarBtn);

    // Botón de eliminar tarea
    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.addEventListener("click", function() {
      tareas.splice(i, 1);
      actualizarLista();
    });
    itemLista.appendChild(eliminarBtn);

    listaTareas.appendChild(itemLista);
  }
}