const callMeByMyName = function () {
  console.log(this.nome);
};

const Pets = {
  nome: 'Pets',
  callThisName: callMeByMyName,
};

const Cars = {
  nome: 'Cars', callThisName: callMeByMyName,
};

Pets.callThisName();
Cars.callThisName();
