/*
Projeto 01 – Projeto Detetive

Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As
perguntas são:
1. "Telefonou para a vítima?"
2. "Esteve no local do crime?"
3. "Mora perto da vítima?"
4. "Devia para a vítima?"
5. "Já trabalhou com a vítima?"

O programa deve no final emitir uma classificação sobre a participação da
pessoa no crime.
Se a pessoa responder positivamente a 2 questões ela deve ser classificada
como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso
contrário, ele será classificado como "Inocente".
*/

const interrogatorio = 
["Telefonou para a vítima?",
"Esteve no local do crime?",
"Mora perto da vítima?",
"Devia para a vítima?",
"Já trabalhou com a vítima?"];

let nivelDeSuspeita = 0;
let veredito = "Inocente";

for ( i = 0; i < interrogatorio.length; i++ ){
  nivelDeSuspeita += pergunta(interrogatorio[i]);
}

if ( nivelDeSuspeita == 5 ){
  veredito = "Assassino";
} else if ( nivelDeSuspeita > 2 ){
  veredito = "Cúmplice";
} else if ( nivelDeSuspeita == 2 ){ 
  veredito = "Suspeito"; 
} 
console.log(`Você foi julgado como: ${veredito}.`);

function pergunta(perg){
  let resp = prompt(perg).toUpperCase();
  if ( resp == "SIM" || resp == "S" || resp == "Y" ){
    return 1;
  } else if ( resp == "NÃO" || resp == "NAO" || resp == "N" ){
    return 0;
  } else {
    console.log("Por favor, responda as perguntas com SIM ou NÃO.");
    return pergunta(perg);
  }
}
