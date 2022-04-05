// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro

// // MÉTODO 01
const myNumbers = (array) => {
  const onlyNumbers = [];
  array.forEach((item) => {
    typeof item === 'number' ? onlyNumbers.push(item) : null;
  });
  console.log(onlyNumbers);
};

const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 1, 2, 3, 4, 5, 6, 7, '8', '9'];

myNumbers(myArray);
