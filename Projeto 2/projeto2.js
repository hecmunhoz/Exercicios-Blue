// Projeto 02 - Jokenpô
//     Utilizando os conceitos aprendidos até estruturas de repetição, crie um programa que jogue pedra, papel e tesoura (jokenpô) com você.

// O programa tem que:
//     Permitir que eu decida quantas rodadas iremos fazer;
//     Ler a minha escolha (pedra, papel ou tesoura);
//     Decidir de forma aleatória a decisão do computador;
//     Mostrar quantas rodadas cada jogador ganhou;
//     Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
//     Perguntar se o jogador quer jogar novamente, se sim volte à escolha de quantidade de rodadas, se não finalize o programa.

console.log("\n------ JOKENPÔ ------");
console.log("   PEDRA    =  0\n   PAPEL    =  1\n   TESOURA  =  2\n");

const prompt = require('prompt-sync')();
const jogador = prompt("Por favor, digite seu nome: ").toUpperCase();
let repetir = true;
let novamente = "";

while ( repetir ){

    let rodadas = 0;
    while ( isNaN(rodadas) || rodadas > 10 || rodadas < 1 ){
        rodadas = Number(prompt(`Boas-vindas ao JOKENPÔ${novamente}, ${jogador}. Quantas rodadas você deseja jogar? (entre 1 e 10): `));
    }
    console.log();
    
    const decisao = ["PEDRA","PAPEL","TESOURA"];
    let jogada = -1;
    let jogadaComputador;
    let placar = 0;
    let empates = 0;
    let resultado;
    
    for (let i = 0; i < rodadas; i++){
        console.log(`--- RODADA ${i+1} ---`);
    
        while ( isNaN(jogada) || jogada > 2 || jogada < 0 ){
            jogada = Number(prompt("Faça sua jogada: "));
        }
        jogadaComputador = Math.floor(Math.random() * 3);
    
        console.log(`Você escolheu ${decisao[jogada]} e o computador escolheu ${decisao[jogadaComputador]}.`);
        console.log(quemGanhou(jogada,jogadaComputador)[0]);
        resultado = quemGanhou(jogada,jogadaComputador)[1];
    
        if (resultado === 0){
            empates += 1;
        } else {
            placar += resultado;
        }
    
        jogada = -1;
        prompt();
    }
    
    console.log("--- PLACAR FINAL ---");
    prompt();
    console.log(`Total de rodadas: ${rodadas}`);
    console.log(`Total de empates: ${empates}`);
    console.log(`Total de vitórias do computador: ${(rodadas-empates)/2-placar/2}`);
    console.log(`Total de vitórias de ${jogador}: ${(rodadas-empates)/2+placar/2}`);
    prompt();
    
    if ( placar > 0 ){
        console.log(`Parabéns, ${jogador}! Você venceu!`);
    } else if ( placar < 0 ){
        console.log(`Que pena, ${jogador}! Você perdeu.`)
    } else {
        console.log(`Ora bolas, um empate! Bem jogado, ${jogador}.`)
    }
    
    while ( repetir !== "SIM" && repetir !== "NAO" ){
        repetir = prompt("Deseja jogar novamente? (digite SIM ou NAO): ").toUpperCase();
    }
    if ( repetir === "SIM" ){
        repetir = true;
        novamente = " novamente";
        console.log("\n------")
    } else if ( repetir === "NAO" ){
        repetir = false;
    }
    console.log();    
} 
console.log("------ FIM DE JOGO ------");

function quemGanhou(j1,j2){
    if ( j1 === j2 ){
        return ["Ora bolas, um empate!",0];
    } else if ( ( j1 < j2 && !(j1 % 2) && !(j2 % 2)) || ( j1 > j2 && (j1 % 2 || j2 % 2)) ){
        return ["Você venceu!",1];
    } else {
        return ["O computador venceu!",-1];
    }
}
