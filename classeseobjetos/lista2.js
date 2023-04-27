/* 
2- Crie uma classe para representar pessoas;
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC 
Formula: imc = peso / (altura * altura)
Instancie uma pesssoa chamada José que tenha 70 kg e 1, 75 de altura para dizer o valor do seu IMC
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    } 

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
       const imc = this.calcularImc()
        
       if (imc < 18.5) {
        return 'Abaixo do peso';
         }
        else if (imc >= 18.5 && imc <= 25){
        return 'Peso normal';
        }
        else if (imc >= 25 && imc < 30){
        return 'Acima do peso';
        }
        else if (imc >= 30 && imc < 40){
        return 'Obeso';
        }
        else {
        return 'Obesidade grave';
        }

    }
}

const jose = new Pessoa('José', 70, 1.74);
console.log(jose.classificarImc());

const flaviana =  new Pessoa('Flaviana', 50, 1.54);
console.log(flaviana.classificarImc());