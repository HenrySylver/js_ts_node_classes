// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de
// cada estudante estarão num array, conforme exemplo abaixo. Você deverá calcular
// a média da nota de cada aluno e retornar um objeto com os atributos nome e media,
// que indica o aluno que teve o melhor desempenho nas notas.

const students = {
  Genebra: [8.5, 9.5, 7, 10, 10],
  Bangkok: [10, 10, 6.5, 10, 9],
  Shanghai: [9, 9, 9.5, 10, 10],
  Tokyo: [7, 8, 10, 9.8, 9.9],
  Moscow: [6, 9, 10, 10, 10],
  California: [10, 10, 10, 10, 10],
  Armenia: [9, 8, 9, 10, 9.9],
  Bogota: [10, 10, 10, 9, 9.5],
  Cairo: [10, 7, 10, 9, 9],
  NewJersey: [9.8, 9.7, 9.5, 7.5, 8],
};

const soma = (array) => array.reduce((acc, cur) => acc + cur, 0);
const average = (array) => soma(array) / array.length;

const averageOfGrades = (students) => {
  const auxArray = Object.entries(students);
  const newArray = auxArray.map((s) => ({
    nome: s[0],
    media: (average(s[1])).toFixed(1),
  }));
  return newArray;
};

console.log(averageOfGrades(students));
