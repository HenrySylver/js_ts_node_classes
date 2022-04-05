// Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de
// desenvolvimento, pretende-se adicionar a funcionalidade de calcular a média de um
// conjunto de números informados pelo usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma
// quantidade indeterminada de números e retorne a média simples desses números.

// MÉTODO 01
const returnAverage = (array) => {
  const onlyNumbers = array.filter((item) => {
    const isNumber = typeof item === 'number';

    return isNumber;
  });
  const sum = onlyNumbers.reduce((acc, cur) => acc + cur);
  const count = onlyNumbers.length;

  return console.log(sum / count);
};

const myArray = [10, 20, 30, 'a', 'b', 'c', '777'];

returnAverage(myArray);
