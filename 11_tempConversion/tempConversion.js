const convertToCelsius = function(fahrenheit) {
  // 	x °F ≘ (x − 32) × ⁠5/9
  // return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
  const celsiusDegrees = (fahrenheit - 32) * (5 / 9);

  return Number.parseFloat(celsiusDegrees.toFixed(1));
};

// const test1 = convertToCelsius(100);
// console.log(test1);
// console.log(typeof(test1));

const convertToFahrenheit = function(celsiusDegrees) {
  // x °C = (x × 9/5 + 32) °F

  const fahrenheitDegrees = celsiusDegrees * (9 / 5) + 32;
  return Number.parseFloat(fahrenheitDegrees.toFixed(1));
};

const test2 = convertToFahrenheit(30);
console.log(test2);

// toFixed(numOfDecimals)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
