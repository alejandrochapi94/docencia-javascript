const li = "5 7 99 34 54 2 12";
let buscar = 25;
//console.log(li);
let lista = li.split(" ");
//console.log(lista);
let bandera = false;
for(let numero of lista){
    if(buscar == numero){
        console.log(`encontrado ${numero}`);
        bandera = true;
        break;
    }
}
if(bandera == false){
    console.log("No se encuentra el número");
}

//console.log(contador);

console.log("#############")

let oracion = "felipe sam juanito frodo legolas";
let oracion1 = oracion.split(" ");
console.log(oracion1);
let sam = "";
let frodo = "";
for(palabra of oracion1){
    if(palabra == 'sam'){
        console.log(`Encontrado ${palabra}`);
        sam = oracion1.indexOf(palabra);
        console.log(sam); 
    }
    if(palabra == 'frodo'){
        console.log(`Encontrado ${palabra}`);
        frodo = oracion1.indexOf(palabra);
        console.log(frodo);
    }
}
if(frodo-sam == 1 || frodo-sam == -1){
    console.log("estan juntos")
} else {
    console.log("estan separados")
}