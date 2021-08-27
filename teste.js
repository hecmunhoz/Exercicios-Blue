// oi

// let carro = {modelo: "pee", ano: 2020};
// for (i in carro){
//     console.log(`${i} : ${carro[i]}`);
// }


let lista = ["A","B","C","D","E"]; 

for (let i = 0; i < lista.length; i++){
    console.log(`${i} : ${lista[i]}`)
}
for (let i in lista){
    console.log(`${i} : ${lista[i]}`);
}

let g = 0;
for (let i of lista){
    console.log(`${g} : ${i}`);
    g += 1
}

lista.forEach(printar);
function printar(valor, indice){
    console.log(`${indice} : ${valor}`);
}