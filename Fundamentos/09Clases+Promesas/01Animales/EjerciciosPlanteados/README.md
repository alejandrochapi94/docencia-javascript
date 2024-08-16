# Ejercicios para la práctica de clases con promesas

Ejercicio 1: Personajes de videojuego

Crea una clase base Character que tenga atributos como nombre, nivel, salud y ataque.
Define un método attack(target) asíncrono que simula un ataque a otro personaje, restando puntos de salud al objetivo. Utiliza setTimeout para simular la duración del ataque.
Crea subclases Warrior, Mage y Archer que hereden de Character y sobrescriban el método attack() para agregar habilidades especiales. Por ejemplo, el Warrior puede hacer un ataque más fuerte, el Mage puede lanzar un hechizo y el Archer puede disparar una flecha.

Ejercicio 2: Cocinar una comida

Crea una clase base Dish que tenga atributos como nombre, ingredientes y tiempo de cocción.
Define un método cook() asíncrono que simula la cocción del plato. Utiliza setTimeout para simular el tiempo de cocción.
Crea subclases Pizza, Pasta y Cake que hereden de Dish y sobrescriban el método cook() para agregar pasos de cocción específicos. Por ejemplo, la pizza necesita ser horneada, la pasta necesita ser hervida y el pastel necesita ser horneado y decorado.

Ejercicio 3: Crear un sistema de transporte

Crea una clase base Vehicle que tenga atributos como marca, modelo, velocidad máxima y consumo de combustible.
Define un método travel(distance) asíncrono que simula un viaje de cierta distancia. Utiliza setTimeout para simular el tiempo que tarda el viaje.
Crea subclases Car, Bike y Airplane que hereden de Vehicle y sobrescriban el método travel() para agregar comportamiento específico. Por ejemplo, el Car puede tener un consumo de combustible diferente al de la Bike, y el Airplane puede tener una velocidad máxima mucho mayor.

Ejercicio 4: Un sistema de apuestas

Crea una clase base Bet que tenga atributos como cantidad y probabilidad de ganar.
Define un método play() asíncrono que simula la resolución de la apuesta. Utiliza Math.random() para determinar si la apuesta se gana o se pierde.
Crea subclases Lottery, Roulette y CoinToss que hereden de Bet y sobrescriban el método play() para implementar las reglas específicas de cada tipo de juego.

Ejercicio 5: Sistema de gestión de empleados

Crea una clase base Employee que tenga atributos como nombre, salario y puesto de trabajo.
Define un método work() asíncrono que simula el trabajo del empleado, por ejemplo, realizando tareas o atendiendo clientes. Utiliza setTimeout para simular la duración de la tarea.
Crea subclases Developer, Designer y Manager que hereden de Employee y sobrescriban el método work() para agregar tareas específicas a cada puesto.