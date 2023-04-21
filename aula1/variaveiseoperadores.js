

const precoCombustivel = 5.79;
//carro a alcool
//Consumo por KM do carro
const kmPorlitros = 10;
const distanciaKm = 100;


const litroConsumidos = distanciaKm / kmPorlitros;
const valorGasto = litroConsumidos * precoCombustivel;





console.log(valorGasto.toFixed(2));


