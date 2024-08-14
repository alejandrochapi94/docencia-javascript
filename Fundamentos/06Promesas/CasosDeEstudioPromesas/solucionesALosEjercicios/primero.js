function fetchProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const products = [
                { name: "Laptop", price: 1000, category: "Electrónica" },
                { name: "Silla", price: 150, category: "Muebles" },
                { name: "Teléfono", price: 700, category: "Electrónica" },
                { name: "Mesa", price: 200, category: "Muebles" }
            ];
            resolve(products);
        }, 2000);
    });
}

async function getElectronics() {
    try {
        const products = await fetchProducts();
        const electronics = products.filter(product => product.category === "Electrónica");
        console.log("Productos electrónicos:", electronics);
    } catch (error) {
        console.error("Error al obtener productos:", error);
    }
}

getElectronics();
