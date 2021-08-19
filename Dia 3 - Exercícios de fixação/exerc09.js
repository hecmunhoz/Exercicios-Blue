/* 9. Você está na flor da idade

Defina uma variável para o valor do ano do nascimento;
Defina uma variável para o valor do ano atual;
Defina uma variável que calcula o valor final da idade da pessoa;
Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade". */

let anoNascimento = parseInt(prompt("Digite o ano do seu nascimento: ")),
    anoAtual = 2021,
    idade = anoAtual - anoNascimento;

console.log(`Você tem ${idade-1} ou ${idade} anos. Estás na flor da idade!!`);
