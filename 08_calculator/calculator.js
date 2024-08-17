const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num > 0) {
    return (num != 1) ? num * factorial(num - 1) : 1;
  } else if (num === 0) {
    return 1;
  } else {
    return 'ERROR'
  };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
