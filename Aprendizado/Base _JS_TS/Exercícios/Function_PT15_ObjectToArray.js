// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que
// cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto

// MÉTODO 01
// const objectToArray = (object) => {
//   const array = Object.keys(object).map((item) => [item, object[item]]);
//   console.log(array);
// };

// MÉTODO 02
const objectToArray = (object) => {
  const array = Object.entries(object);
  console.log(array);
};

const myObject = {
  id: 0,
  nome: 'James',
  sobrenome: 'Bond',
  codinome: '007',
  jargao: 'Meu nome é Bond, James Bond.',
};

objectToArray(myObject);
