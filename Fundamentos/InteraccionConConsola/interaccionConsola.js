const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pregunta(pregunta) {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
        });
    });
}

async function main() {
    const nombre = await pregunta('¿Cuál es tu nombre? ');
    const edad = await pregunta('¿Cuántos años tienes? ');
    console.log(`Hola, ${nombre}. Tienes ${edad} años.`);
    
    rl.close();
}

main();
