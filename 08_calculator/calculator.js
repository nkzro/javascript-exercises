const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  let add = 0;
	array.forEach(number => {
    add += number;
  })
  return add;
};

const multiply = function(array) {
  let multiply = 1;
	array.forEach(number => {
    multiply *= number;
  })
  return multiply;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  let fact = 1;
	for (i = number; i > 0; i--) {
    fact *= i;
  }
  return fact;
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
