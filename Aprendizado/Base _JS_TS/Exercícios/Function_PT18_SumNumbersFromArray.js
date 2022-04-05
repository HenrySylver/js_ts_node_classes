// Escreva uma função que receba um array de números e retornará
// a soma de todos os números desse array.

// MÉTODO 01
const sumNumbers = (array) => {
  const onlyNumbers = array.filter((item) => {
    const isNumber = typeof item === 'number';

    return isNumber;
  });
  console.log(onlyNumbers.reduce((acc, cur) => acc + cur));
};

const myArray = [7, 7, 7, 'a', 'b', 'c', '777'];

sumNumbers(myArray);
