const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, value) => acc + value, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, value) => acc * value, 1);
};

const power = function(a, b) {
  let counter = 1;
	for (let i = 0; i < b; i++) {
    counter *= a;
    console.log(counter);
  } 
  
  return counter;
   /*
  return a ** b;
  */
};

const factorial = function(num) {
  // let counter = 1;
	// for (let i = 1; i < num; i++) {
  //   counter *= (i + 1)
  // }
  
  // return counter;

  /* 
  // TOP solution
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
  */
  
  // Recursive function
  if (num === 0) return 1;
  return num * factorial(num - 1);  
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
