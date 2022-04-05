// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.

// MÉTODO 01
// const repeat = (repetidor, repeticao) => {
//   const ourArray = [];
//   while (ourArray.length < repeticao) {
//     ourArray.push(repetidor);
//   }
//   console.log(ourArray);
// };

// MÉTODO 02
const repeat = (repetidor, repeticao) => {
  const ourArray = Array(repeticao).fill(repetidor);
  console.log(ourArray);
};

repeat(1, 20);
