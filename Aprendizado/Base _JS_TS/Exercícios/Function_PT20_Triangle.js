// Faça uma função que recebe a base e a altura de um triângulo e
// retorne a área desse triângulo. A precisão deverá ser de duas casas
// decimais, arredondando se necessário.

const area = (b, a) => {
  const myArea = (b * a) / 2;
  return myArea.toFixed(2);
};

const base = 9.25;
const altura = 13.1;

console.log(area(base, altura));
