// class Mes {
//   constructor(mes, nomeDoMes) {
//     this.mes = mes;
//   }

//   qualMesEVoce(mes) {
//     switch (mes) {
//       case 1: return 'Janeiro';
//       case 2: return 'Fevereiro';
//       case 3: return 'Março';
//       case 4: return 'Abril';
//       case 5: return 'Maio';
//       case 6: return 'Junho';
//       case 7: return 'Julho';
//       case 8: return 'Agosto';
//       case 9: return 'Setembro';
//       case 10: return 'Outubro';
//       case 11: return 'Novembro';
//       case 12: return 'Dezembro';
//       default: return null;
//     }
//   }
// }

// const meses = new Mes([
//   { mes: 1 },
//   { mes: 2 },
// ]);

// console.log(meses);
// console.log(meses.qualMesEVoce());

const mes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

mes.forEach((mes) => {
  switch (mes) {
    case 1:
      return console.log(`Mês: ${mes}: Janeiro`);
    case 2: return console.log(`Mês: ${mes}: Fevereiro`);
    case 3: return console.log(`Mês: ${mes}: Março`);
    case 4: return console.log(`Mês: ${mes}: Abril`);
    case 5: return console.log(`Mês: ${mes}: Maio`);
    case 6: return console.log(`Mês: ${mes}: Junho`);
    case 7: return console.log(`Mês: ${mes}: Julho`);
    case 8: return console.log(`Mês: ${mes}: Agosto`);
    case 9: return console.log(`Mês: ${mes}: Setembro`);
    case 10: return console.log(`Mês: ${mes}: Outubro`);
    case 11: return console.log(`Mês: ${mes}: Novembro`);
    case 12: return console.log(`Mês: ${mes}: Dezembro`);
    default: return null;
  }
});
