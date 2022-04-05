// Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro,
// o nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
// propriedade especificada no segundo parâmetro

const objectWithoutProperty = (objeto, propriedades) => Reflect.deleteProperty(objeto, propriedades);

const removeProperties = (objeto, propriedades) => {
  const prop = [...propriedades];
  prop.forEach((prop) => {
    objectWithoutProperty(objeto, prop);
  });
  console.log(myObject);
  console.log(`My name is ${objeto.sobrenome}, ${objeto.nome} ${objeto.sobrenome}`);
};

const myObject = {
  ID: 0,
  nome: 'James',
  sobrenome: 'Bond',
  codinome: '007',
};

const propriedadesParaDeletar = ['ID', 'codinome'];

removeProperties(myObject, propriedadesParaDeletar);
