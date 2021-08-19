/* 6. Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário:

- Quantidade de vida de um monstro (entre 10 e 50);
- Valor do ataque do jogador por turno (entre 5 e 10);
- Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro. */

let hp = prompt("Monster HP (between 10 and 50) = "),
    atk = prompt("Your attack power (between 5 and 10) = ");

console.log(`You will defeat the monster in ${Math.ceil(hp/atk)} turns.`);
