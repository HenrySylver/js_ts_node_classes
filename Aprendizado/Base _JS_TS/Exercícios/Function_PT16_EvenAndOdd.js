// Elabore uma função que receba um array de números e retorne um array que tenha todos
// os números que são pares e que também tenham índices pares

// // MÉTODO 01
// const evensRule = (array) => {
//   const onlyEvens = [];
//   array.forEach((item) => {
//     if (item % 2 === 0 && array.indexOf(item) % 2 === 0) {
//       return onlyEvens.push(item);
//     } return null;
//   });
//   console.log(onlyEvens);
// };

// MÉTODO 02
const evensRule = (array) => console.log(array.filter((valor, indice) => {
  const valorPar = valor % 2 === 0;
  const indicePar = indice % 2 === 0;

  return valorPar && indicePar;
}));

const myArray = [10, 2, 84, 67, 98, 100];

evensRule(myArray);
