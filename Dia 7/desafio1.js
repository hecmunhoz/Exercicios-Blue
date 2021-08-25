// Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.

// Modifique os elementos do array de modo a a sequência de números ficar do contrário.
// Ou seja, se digitou: 1,2,3 Vai aparecer: 3,2,1

const prompt = require('prompt-sync')();

let lista = [];
for ( let i = 0; i < 3; i++ ){
    lista.splice(i,1,prompt(`Digite o ${i+1}° número: `));
}
console.log(lista);

let lista2 = [];
// let c = 1;
for (i of lista){
    // lista2.splice(-c,0,i);
    // c += 1;
    lista2.unshift(i);
}
console.log(lista2);