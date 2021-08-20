/*DESAFIO 01
Reajuste salarial
As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5%

Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento."*/

let reajuste = 0,
    salarioFinal = 0,
    salarioBase = (parseFloat(prompt("Digite o salário-base: "))).toFixed(2);

if ( salarioBase <= 280 ) {
   reajuste = 1.20; 
} else if ( salarioBase <= 700 ) {
   reajuste = 1.15;
} else if ( salarioBase <= 1500 ) {
   reajuste = 1.10;
} else if ( salarioBase > 1500 ) {
   reajuste = 1.05;
}

salarioFinal = ( salarioBase * reajuste ).toFixed(2)

console.log(`
Salário-base: R$ ${salarioBase}
Percentual do reajuste: ${((reajuste-1)*100).toFixed(0)}%
Seu salário aumentou em R$ ${(salarioFinal-salarioBase).toFixed(2)}, totalizando R$ ${salarioFinal}
`);
