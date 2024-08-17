fetch('productos.json') // 1. Obtener el archivo
  .then(response => response.json()) // 2. Convertir a JSON
  .then(productos => {
    productos.forEach(producto => { // 3. Iterar sobre cada producto
      console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
    });
  });