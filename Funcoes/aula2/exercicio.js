function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const condicaoPagamento = 4;


if (condicaoPagamento === 1){
    //Valor pago no Débito com 10% de desconto
    console.log(aplicarDesconto(precoEtiqueta, 10));
}
else if (condicaoPagamento === 2){
    //Valor pago no Dinheiro ou PIX com 15% de desconto
    console.log(aplicarDesconto(precoEtiqueta, 15));
}
else if (condicaoPagamento === 3){
    //Em duas vezes, preço normal de etiqueta sem juros
    console.log(precoEtiqueta);
}
else if (condicaoPagamento === 4){
    //Acima de duas vezes, preço normal de etiqueta mais juros de 10%
    console.log(aplicarJuros(precoEtiqueta, 10));
}
