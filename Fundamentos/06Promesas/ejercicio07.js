//Ejercicio del manejo de errores mediante la creación de un objeto error

//Usando promesas con then
const datos2 = []

const getDatos2= () =>{
    return new Promise((resolve, reject)=>{
        if(datos2.length === 0){
            reject(new Error("No existen datos"));
        }
        
        setTimeout(()=>{
            resolve(datos2)
        },1000)
    })
}

getDatos2().then((datos)=>{
    console.log(datos, "Recibidos")
}).catch((err)=>{
    console.log(err.message)
})

//Usando ascyn y await

const datos = [1]

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.length === 0) {
            reject(new Error("No existen datos"));
        }
        
        setTimeout(() => {
            resolve(datos)
        }, 1000)
    })
}
//Uso de async con una función flecha (Cambia la sintaxis en la declaración del ascync)
const manejarDatos = async () => {
    try {
        const datos = await getDatos();
        console.log(datos, "Recibidos");
    } catch (err) {
        console.log(err.message);
    }
}

manejarDatos();
