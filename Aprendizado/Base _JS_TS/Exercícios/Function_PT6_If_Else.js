let log = '';

const check = (a, b) => {
  log = a > b;
  console.log(log);
};

check(1, 2);
check(2, 1);
