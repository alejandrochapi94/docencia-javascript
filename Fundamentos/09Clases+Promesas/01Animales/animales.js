// Clase base para animales
class Animal {
  constructor(name) {
    this.name = name;
  }

  async makeSound() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`El animal ${this.name} hace un sonido.`);
      }, 1000);
    });
  }
}

// Subclase para perros
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  async makeSound() {
    return await super.makeSound() + " ¡Guau!";
  }
}

// Subclase para gatos
class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  async makeSound() {
    return await super.makeSound() + " ¡Miau!";
  }
}

// Ejemplo de uso
async function main() {
  const perro = new Dog("Firulais");
  const gato = new Cat("Michi");

  console.log(await perro.makeSound()); // El animal Firulais hace un sonido. ¡Guau!
  console.log(await gato.makeSound()); // El animal Michi hace un sonido. ¡Miau!
}

main();