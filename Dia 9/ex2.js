const prompt = require('prompt-sync')();
// #02 - Crie um programa que vai ler vários números e colocar em uma lista. Depois
// disso, crie duas listas extras que vão conter apenas os valores pares e os valores
// ímpares digitados, respectivamente. Ao final, mostre o conteúdo das três listas
// geradas.

let val = [];
let tam = 0;

while ( tam > 10 || tam < 1 ){
    tam = prompt("Quantos números vc quer cadastrar? (entre 1 e 10) ");
}

for ( let i = 0; i < tam; i++ ){
    val.push(prompt(`Cadastre o ${i+1}° número: `));
}
console.log(val,separaParImpar(val)[0],separaParImpar(val)[1])

function separaParImpar(list){
    let listPar = [];
    let listImpar = [];
    for (i of list){
        if (i % 2 === 0){
            listPar.push(i);
        } else {
            listImpar.push(i);
        }
    }
    return [listPar,listImpar];
}