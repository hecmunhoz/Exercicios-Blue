/*DESAFIO 02
Jogo da adivinhação
Escreva um programa que faça o computador "pensar" em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. 
O programa deverá escrever na tela se o usuário venceu ou perdeu.
*/

let numeroAleatorio = Math.floor(Math.random() * 11);
// console.log(numeroAleatorio);

let chute = prompt("Em qual número entre 0 e 10 eu estou pensando?");
if (chute == numeroAleatorio) {
   console.log("Parabéns, você acertou!!");
} else {
   console.log("Parabéns, você errou!!");
}
