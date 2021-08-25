const prompt = require('prompt-sync')();
// 1. Calcular a soma de todos os dígitos de um número inteiro positivo

let x = prompt("Digite um número: ");
let final = somaDigitos(x);
console.log(final);

while ( final > 9 ){
    final = somaDigitos(final.toString());
    console.log(final);
}

function somaDigitos(n){
    let soma = 0;
    for (let i of n){
    soma += parseInt(i);
    }
    return soma;
}


// let x = prompt("Digite um número: ");
// console.log(somaDigitos(x));

// function somaDigitos(n){
//     let soma = 0;
//     for (let i of n){
//     soma += parseInt(i);
//     }
//     if ( soma > 9 ){
//         soma = somaDigitos(soma.toString());
//     }
//     return soma;
// }

// 2. Criar uma função que junte dois arrays e retorno o resultado como um novo array

let lista1 = [1,2,3];
let lista2 = [4,5,6];
let lista3 = juntaLista(lista1,lista2);
console.log(lista3);

function juntaLista(l1,l2){
    l3 = [];
    for (let i of l1){
        l3.push(i);
    }
    for (let i of l2){
        l3.push(i);
    }
    return l3;
}

// 3. Contar a quantidade de palavras em um texto

let mensagem = "Lorem ipsum dolor sit amet..."
let qnt = 1;
for (let i of mensagem){
    if ( i == " " ){
        qnt += 1;
    }
}
console.log(`"${mensagem}" tem ${qnt} palavras.`)