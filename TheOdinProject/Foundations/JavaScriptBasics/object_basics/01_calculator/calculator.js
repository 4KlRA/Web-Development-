const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, num) => total + num, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total * num, 1)
};

const power = function(base, expo) {
	return base ** expo;
};

const factorial = function(num) {
  if(num === 0 || num === 1) return 1;
  let fact = num;
  while(num--) {
    fact *= num;
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
