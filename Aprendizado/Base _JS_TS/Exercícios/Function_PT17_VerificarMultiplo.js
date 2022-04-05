// A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se
// os anos bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
// Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4.
// Não pode ser múltiplo de 100, exceto se for também múltiplo de 400.
// // Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e
// retorna se ele é bissexto ou não.

// // MÉTODO 01
// const validarAnoBissexto = (y) => {
//   let check = '';
//   if (y % 4 === 0 && y % 100 === 0 && y % 400 === 0) {
//     check = true;
//     console.log(`${y} é um ano bissexto`);
//   } else {
//     check = false;
//     console.log(`${y} não é um ano bissexto`);
//   }
// };

// MÉTODO 02
const validarAnoBissexto = (ano) => {
  const divisivelPorQuatro = ano % 4 === 0;
  const divisivelPorCem = ano % 100 === 0;
  const divisivelPorQuatrocentos = ano % 400 === 0;

  return console.log((divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos);
};

validarAnoBissexto(2100);
