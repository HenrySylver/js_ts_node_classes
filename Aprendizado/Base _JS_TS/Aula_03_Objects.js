const colaboradores = [
  {
    colaboradorID: 0,
    name: 'James',
    surname: 'Bond',
    formacao: 'Relações Internacionais',
    grauFormacao: 'Bacharelado',
    conclusaoFormacao: 'concluída',
  },
  {
    colaboradorID: 1,
    name: 'Pedro',
    surname: 'Prado',
    formacao: 'Engenharia da Computação',
    grauFormacao: 'Bacharelado',
    conclusaoFormacao: 'em andamento',
  },
  {
    colaboradorID: 3,
    name: 'Denilson',
    surname: 'Amaro',
    formacao: 'Física',
    grauFormacao: 'Bacharelado',
    conclusaoFormacao: 'concluída',
  },
];

// for (const name of colaboradores) {
//   console.log(name.formacao);
// }

// const {
//   colaboradorID, name, formacao, grauFormacao, conclusaoFormacao,
// } = colaboradores;

// const message = null;

// forEach (const col of colaboradores) {
//   // console.log(`Boa tarde a todos. Me chamo ${colaboradores.name}, e serei seu instrutor nesta aula. Minha graduação é ${colaboradores.grauFormacao} em
//   // ${colaboradores.formacao}, que se encontra ${colaboradores.conclusaoFormacao}.`);
//   console.log(col.colaboradorID);
// }

colaboradores.forEach((col) => {
  console.log(col.classes);
  console.log(
    // `Boa tarde a todos. Me chamo ${col.name}, e serei seu instrutor nesta aula. Minha graduação é ${col.grauFormacao} em
    // ${col.formacao}, que se encontra ${col.conclusaoFormacao}.`,
    `Meu nome é ${col.surname}, ${col.name} ${col.surname}.`,
  );
  col.classes = 'initialized';
  console.log(col.classes);
});
