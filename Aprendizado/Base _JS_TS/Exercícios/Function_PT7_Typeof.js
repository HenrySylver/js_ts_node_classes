const invert = (myList) => myList.map((item) => {
  if (typeof item === 'number') {
    return -item;
  } return !item;
});

// const invert = (myList) => myList.map((item) => !item || -item);

const main = () => {
  const list = [-10, 10, true, false];

  console.log(list);
  console.log(invert(list));
};

main();
