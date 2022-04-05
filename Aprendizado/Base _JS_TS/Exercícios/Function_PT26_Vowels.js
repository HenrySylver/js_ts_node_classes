// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
// consoantes, ou seja, sem as vogais.

const noVowelsAllowed = (string) => {
  let newString = string;
  newString = newString.replaceAll(/['a''e''i''o''u']/g, '');
  return newString;
};

const myString = 'Balas azuis dificilmente saem de estoque; chocolates com maestria atingem a meta de vendas.';

console.log(noVowelsAllowed(myString));
