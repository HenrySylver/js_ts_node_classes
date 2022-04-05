// Criar uma função que receba um array de números e retorne o menor número desse array.

const lowerNumber = (array) => Math.min(...array);

const myArray = [-7, 3, 7];

console.log(lowerNumber(myArray));
