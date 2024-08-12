
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