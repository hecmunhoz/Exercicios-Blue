/* 10. Conversor de moedas

Crie um programa que solicite um valor em real ao usuário e converta esse valor, para dólar. */

let valorReal = parseFloat(prompt("Digite um valor em reais: ")),
    cambioDolar = 5.38;

console.log(`R$ ${valorReal.toFixed(2)} é igual a US$ ${(valorReal/cambioDolar).toFixed(2)}.`);