const multiply = (first, second) => {
  if (first < 0 || second < 0) {
    return console.log('Um dos argumentos é um número não positivo');
  } return console.log(Math.imul(first, second));
};

multiply(0, 5);
