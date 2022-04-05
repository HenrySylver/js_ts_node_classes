// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela

const charCount = (string) => string.length;

const wordCount = (string) => {
  const newString = string.split(' ');
  return newString.length;
};

const countMyString = (string) => {
  const words = wordCount(string);
  const chars = charCount(string);

  return console.log(`This string has ${words} words and ${chars} characters.`);
};

myString = 'Balões azuis dificilmente vão a Lua. Balões rosas com êxito chegam ao Sol.';

countMyString(myString);
