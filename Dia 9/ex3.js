// Desafio: Faça um programa que ajude um jogador da MEGA SENA a criar
// palpites. O programa vai perguntar quantos jogos serão gerados e vai sortear 6
// números entre 1 e 60 para cada jogo, cadastrando tudo em uma lista composta.
const prompt = require('prompt-sync')();

let jogos = [];
let qnt = 0;

while ( qnt > 100 || qnt < 1 ){
    qnt = prompt("Quantos jogos da MEGA SENA você quer gerar? (entre 1 e 100) ");
}

for ( let i = 0; i < qnt; i++ ){
    jogos.push([]);
    for ( let j = 0; j < 6; j++ ){
        jogos[i].push(Math.floor(Math.random() * 60) + 1);
    }
    jogos[i].sort(function(a, b){return a-b});
}

console.log(jogos);