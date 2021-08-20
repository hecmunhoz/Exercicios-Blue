/*DESAFIO 3
Caixa eletrônico
Faça um programa para um caixa eletrônico. O programa deverá perguntar ao usuário o valor do saque e depois informar quantas notas de cada valor serão fornecidas. 
As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. 
O programa não deve se preocupar com a quantidade de notas existentes na máquina.

Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/

let notasDisponiveis = [100,50,10,5,1],
    notasFornecidas = [],
    notaAtual = 0,
    saque = parseInt(prompt("Por favor, informe o valor do saque:"));

if ( saque < 10 || saque > 600 ) {
  console.log("Desculpe, o valor mínimo é R$10,00 e o valor máximo é R$600,00.");
} else {
  console.log("Você recebeu:");

  for ( let i = 0; i < notasDisponiveis.length; i++ ) {
    notaAtual = Math.floor(saque/notasDisponiveis[i]);
    notasFornecidas.push(notaAtual);
    saque -= notaAtual*notasDisponiveis[i];

    if (notasFornecidas[i] == 1) {
      console.log(`1 nota de R$ ${notasDisponiveis[i]}`); 
    } else if ( notasFornecidas[i] != 0  ) {
      console.log(`${notasFornecidas[i]} notas de R$ ${notasDisponiveis[i]}`);
    }
  }
}
