/* 11. Calculadora de aumento de aluguel 

A sua calculadora vai receber o valor do aluguel e calcular o aumento baseado no IGPM de 31%.
A calculadora deve apresentar o aluguel reajustado no formato R$9999.99 */

let valorAluguel = parseFloat(prompt("Digite o valor do seu aluguel: ")),
    IGPM = 0.31;
console.log(`Seu aluguel reajustado com base no IGPM é igual a R$ ${(valorAluguel*(1+IGPM)).toFixed(2)}.`);