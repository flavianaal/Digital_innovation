/* 
1 - Crie uma classe para representar carros
Os carros possuem uma marca, cor e um gasto medio de combustivelpor kilometros rodados
Crie um método que dado a quantidade de quilometros e o preço do combustivel e nos der
o valor gasto em reais para realizar este percurso
 */

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca,cor,gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
//metodo
calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel
}


}
const uno = new Carro('Fiat', 'Vermelho', 1 / 12);
console.log(uno.calcularGastoDePercurso(70, 5));
const palio = new Carro('Palio', 'Preto', 1/10)
console.log(palio.calcularGastoDePercurso(70, 5))





