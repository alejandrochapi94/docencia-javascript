class Order {
  constructor(items) {
    this.items = items;
  }

  getTotalPrice() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const totalPrice = this.items.reduce((total, item) => total + item.price, 0);
        resolve(`Precio total: ${totalPrice}`);
      }, 1000);
    });
  }
}

class PriorityOrder extends Order {
  constructor(items, deliveryTime) {
    super(items);
    this.deliveryTime = deliveryTime;
  }

  getDeliveryTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Tiempo de entrega: ${this.deliveryTime}`);
      }, 1000);
    });
  }
}


async function processOrder(order) {
  try {
    const totalPrice = await order.getTotalPrice();
    console.log(totalPrice);

    if (order instanceof PriorityOrder) {
      const deliveryTime = await order.getDeliveryTime();
      console.log(deliveryTime);
    }
  } catch (error) {
    console.error('Error al procesar el pedido:', error);
  }
}

const order = new Order([
  { name: 'Item 1', price: 10 },
  { name: 'Item 2', price: 20 },
  { name: 'Item 3', price: 30 }
]);

order.getTotalPrice()
  .then(totalPrice => {
    console.log(totalPrice);
    // Output: Precio total: 60
  })
  .catch(error => {
    console.error(error);
  });