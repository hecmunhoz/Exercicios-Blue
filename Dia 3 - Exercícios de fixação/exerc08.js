/* 8. Qual o valor do troco?

Defina uma variável para o valor de uma compra que custou R$100,98;
Defina uma variável para o valor que o cliente pagou R$150,00;
Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado. */

let valorCompra = 100.98,
    clientePagou = 150,
    troco = clientePagou - valorCompra;

console.log(`Seu troco é R$ ${troco.toFixed(2)}.`);
