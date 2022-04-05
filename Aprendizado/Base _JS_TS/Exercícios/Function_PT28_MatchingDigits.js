// Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo
// é um número que especifica uma quantidade de dígitos. Essa função deverá retornar
// somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo parâmetro.

// // MÉTODO 01
// const matchingDigits = (array, digits) => {
//   const newArray = [];
//   array.forEach((num) => {
//     const digit = num.toString().length;
//     digit === digits ? newArray.push(num) : null;
//   });
//   return newArray;
// };

// MÉTODO 02
const matchingDigits = (array, digits) => array.filter((num) => {
  const digit = String(num).length;
  return digit === digits;
});

const myNumbers = [7, 3, 12, 40, 70, 54, 777, 333, 33, 52, 1000000];

console.log(matchingDigits(myNumbers, 2));
