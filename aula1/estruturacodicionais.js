
/*Faça um programa para calcular o valor gasto de combustivel pelo carro em uma viagem

Voce tera 5 variaveis. Sendo elas;
1. Preco do combustivel(gasolina e Etanol)
2. O tipo de combustivel que esta no seu carro
3. Distancia em Km da viagem
4. O gasto medio de combustivel do carro por KM

Imprima no console o valor que será gasto de combustível para realizar essa viagem */


const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}










