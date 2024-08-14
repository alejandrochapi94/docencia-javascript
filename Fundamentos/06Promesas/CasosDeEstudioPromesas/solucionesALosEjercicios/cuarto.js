let cart = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Mouse", price: 50, quantity: 2 },
    { name: "Teclado", price: 100, quantity: 1 }
];

function processOrder(cart) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Puedes cambiar esto a false para probar el manejo de errores
            if (success) {
                resolve("Orden procesada exitosamente");
            } else {
                reject("Error al procesar la orden");
            }
        }, 2000);
    });
}

async function completePurchase() {
    try {
        const message = await processOrder(cart);
        console.log(message);
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        console.log("Total a pagar:", total);
    } catch (error) {
        console.error("Error durante la compra:", error);
    }
}

completePurchase();
