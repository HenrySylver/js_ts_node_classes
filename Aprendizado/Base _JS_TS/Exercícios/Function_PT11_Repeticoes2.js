// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.

// MÉTODO 01
const repeat = (repeticao) => {
  const ourArray = Array(repeticao).fill('+').join('');
  console.log(`LENGTH: ${ourArray.length}`);
  console.log(ourArray);
};

repeat(7);
