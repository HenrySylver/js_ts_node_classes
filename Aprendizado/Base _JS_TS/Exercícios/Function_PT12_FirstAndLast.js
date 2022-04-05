// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array

const holdThisArray = ['Hunter Especialista', 'Conexão Perdida', 'Novos Tickets', '17260986'];

const newArray = (array) => {
  const firstElement = array.shift();
  const lastElement = array.pop();
  return console.log([firstElement, lastElement]);
};

newArray(holdThisArray);
