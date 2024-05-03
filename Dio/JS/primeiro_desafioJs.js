

const preçoCombustivel = 5.79;
const kmPorLitros = 1;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const totalGasto = litrosConsumidos * preçoCombustivel;

console.log(totalGasto);