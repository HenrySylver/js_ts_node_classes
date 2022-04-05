// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a
// quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive,
// ou seja, irá diferenciar maiúsculas de minúsculas.

const countRepChars = (string) => {
  const array = string.split(whatImLookingFor);
  return array.length - 1;
};

const myString = 'Balões azuis dificilmente vão a Lua. Balões rosas com êxito chegam ao Sol.';

const whatImLookingFor = 'Balões';

console.log(countRepChars(myString));
