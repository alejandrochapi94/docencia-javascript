class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getDetails() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Nombre: ${this.name}, Precio: ${this.price}`);
      }, 1000); // Simula la consulta a la base de datos
    });
  }
}

class ElectronicProduct extends Product {
    constructor(name, price, brand) {
      super(name, price);
      this.brand = brand;
    }
  
    getBrand() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`Nombre: ${this.name}, Precio: ${this.price}, Marca: ${this.brand}`);
          resolve(`Marca: ${this.brand}`);
        }, 1000);
      });
    }
  }

  async function displayProductDetails(product) {
    try {
      const details = await product.getDetails();
      console.log(details);
  
      if (product instanceof ElectronicProduct) {
        const brand = await product.getBrand();
        console.log(brand);
      }
    } catch (error) {
      console.error('Error al obtener detalles del producto:', error);
    }
  }