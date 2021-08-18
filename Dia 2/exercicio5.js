// Exercício 5 - Elabore um programa que receba 3 notas de um aluno e calcule a média dele.

let x = parseFloat(prompt("Digite a primeira nota: "));
let y = parseFloat(prompt("Digite a segunda nota: "));
let z = parseFloat(prompt("Digite a terceira nota: "));

console.log("Com as notas", x, "+", y, "+", z, ", você obteve a média de:", ((x+y+z)/3).toFixed(2));
