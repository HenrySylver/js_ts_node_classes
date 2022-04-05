// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que
// corresponde ao objeto recebido como parâmetro, porém com as posições das chaves e valores
// invertidas, conforme exemplo a seguir

const objectShuffle = (object) => {
  const newArray = Object.entries(object);
  const suffledArray = newArray.reverse();
  const newObject = Object.fromEntries(suffledArray);
  return newObject;
};

const myObject = {
  id: 0,
  nome: 'James',
  sobrenome: 'Bond',
  codinome: '007',
  jargao: 'Meu nome é Bond, James Bond.',
};

console.log(objectShuffle(myObject));
