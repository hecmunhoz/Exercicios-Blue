// 5. Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.

let nomes = ["Renato", "Ademar", "Filomeno"];

console.log(`
MENU DE OPÇÕES
1. ${nomes[0]}
2. ${nomes[1]}
3. ${nomes[2]}
`);

let escolha = prompt("Digite o número da opção escolhida: ");
console.log(`Parabéns, seu nome agora é ${nomes[escolha-1]}!`);