// Crie uma função que recebe um array de números e retorna o segundo
// maior número presente nesse array.

// // MÉTODO 01
// const getRank = (array) => {
//   const newArray = array.filter((number) => {
//     const highest = Math.max(...array);
//     return number !== highest;
//   });
//   return Math.max(...newArray);
// };

// MÉTODO 01
const getRank = (array, rank) => {
  const newArray = array.sort((acc, cur) => cur - acc);
  return newArray[rank - 1];
};

const myNumbers = [7, 3, 12, 40, 70, 54, 777, 333, 33, 52];

console.log(getRank(myNumbers, 2));
