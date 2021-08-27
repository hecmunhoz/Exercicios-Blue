const prompt = require('prompt-sync')();
// #01 - Crie um programa onde o usuário possa digitar vários valores numéricos e
// cadastre-os em uma lista. Caso o número já esteja lá dentro, ele não será
// adicionado. No final, serão exibidos todos os valores únicos digitados, em ordem
// crescente.

let valores = [];
let tam = 0;
let n;

while ( tam > 10 || tam < 1 ){
    tam = prompt("Quantos números vc quer cadastrar? (entre 1 e 10) ");
} 
for ( let i = 0; i < tam; i++ ){
    n = prompt(`Cadastre o ${i+1}° número: `);
    while ( comparaComLista(n,i,valores) ){
        console.log("Proibido repetir números!!")
        n = prompt(`Cadastre o ${i+1}° número: `);
    }
    valores.push(n);
} 
console.log(valores.sort(function(a, b){return a-b}));

function comparaComLista(val,ind,list){
    for ( i = 0; i < ind; i++ ){   
        if ( list[i] === val ){
            return true
        }
    }
    return false
}