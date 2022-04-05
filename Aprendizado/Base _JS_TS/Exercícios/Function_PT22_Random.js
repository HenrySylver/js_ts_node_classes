// Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente,
// na função, será gerado um número aleatório de 1 a 10. A função deverá retornar se o
// parâmetro de entrada foi igual ao número sorteado internamente. Se o valor fornecido
// foi o sorteado, retorne "Parabéns! O número sorteado foi o X".
// Se não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.

const sort = (number) => {
  const numbers = [...number];
  const limit = [0, 10];
  const validNumbers = numbers.filter((num) => num <= limit[1]);

  validNumbers.forEach((number) => {
    const randomNumber = Math.round(((limit[1] - limit[0]) + limit[0]) * Math.random());

    if (number === randomNumber) {
      return console.log(`Congratulations! You've won our BINGO! You've picked the number ${number} and the result was ${randomNumber}.`);
    } return console.log(`Poor you, it was not this time. You've picked the number ${number} and the result was ${randomNumber}.`);
  });
};

const numeroDaSorte = [10, 7, 3];

sort(numeroDaSorte);
