// Crie um script que pergunte 3 números ao usuário (usando for!), coloque em um array, depois exiba tal array.

// Depois use um for para percorrer esse Array, e pergunte para o usuário o novo valor que ele quer colocar em cada posição.
// (Por exemplo: "Digite um novo valor para a posição 1", "Digite um novo valor para a posição 2", etc...). 

// Substitua o valor na lista original para o novo valor entrado pelo usuário.

const prompt = require('prompt-sync')();

let lista = [];
for ( let i = 0; i < 3; i++ ){
    lista.splice(i,0,prompt(`Digite um valor para a ${i+1}a posição: `));
}
console.log(lista);

let c = 0;
for ( let i of lista ){
    lista.splice(c,1,prompt(`Digite um novo valor para a ${c+1}a posição: `));
    c += 1
}
console.log(lista);