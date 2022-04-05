const main = () => {
  const estaEntre = (minimo, maximo, referencia, inclusivo) => {
    if (inclusivo === true) {
      if (referencia >= minimo && referencia <= maximo) {
        return true;
      } return false;
    } if (referencia > minimo && referencia < maximo) {
      return true;
    } return false;
  };
  console.log(estaEntre(1, 2, 3, true));
};

main();
