/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a 
escolha da condição de pagamento. Utilize os codigos da tabela a seguir para ler qual a condição de pagemento
escolhida e efetuar o calculo adequado.

Codigo: Condição de pagamento:
-1 A vista Debito, receba 10% de de desconto;
-2 A vista no dinheiro ou no PIX, receba 15% de desconto;
-3 Em duas vezes, preço normal de etiqueta sem juros;
-4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
 */


const precoEtiqueta = 100;
const condicaoPagamento = 5;


if (condicaoPagamento === 1){
    //Valor pago no Débito com 10% de desconto
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}
else if (condicaoPagamento === 2){
    //Valor pago no Dinheiro ou PIX com 15% de desconto
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
}
else if (condicaoPagamento === 3){
    //Em duas vezes, preço normal de etiqueta sem juros
    console.log(precoEtiqueta);
}
else if (condicaoPagamento === 4){
    //Acima de duas vezes, preço normal de etiqueta mais juros de 10%
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}
