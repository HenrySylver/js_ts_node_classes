const first = 10;
const second = 20;

// declaração padrão
const sumWithJamesFunction = function soma(a, b) {
  console.log(`First Value: ${a} || Second Value: ${b}`);
  console.log(`Product: ${a + b}`);
  return a + b;
};
sumWithJamesFunction(first, second);

// arrow function
const sumWithDaniboyFuncion = (a, b) => {
  console.log(`First Value: ${a} || Second Value: ${b}`);
  console.log(`Product: ${a + b}`);
  return a + b;
};
sumWithDaniboyFuncion(first, second);
