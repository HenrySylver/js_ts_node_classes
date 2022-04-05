// const { arrayBuffer } = require('stream/consumers');

const despesasTotais = [
  {
    despesaID: 0,
    despesa: 'Jornal Online',
    categoria: 'Informação',
    preço: 89.99,
  },
  {
    despesaID: 1,
    despesa: 'Cinema',
    categoria: 'Entretenimento',
    preço: 150,
  },
];

// let valorTotal = 0;

// const minhasDespesas = (desp) => {
//   desp.forEach((despesa) => {
//     valorTotal += despesa.preço;
//   });
//   console.log(valorTotal);
// };

// minhasDespesas(despesasTotais);

const total = despesasTotais.reduce((acumulador, item) => acumulador + item.preço, 0);

console.log(total);
