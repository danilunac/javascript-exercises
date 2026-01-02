const palindromes = function (str) {
    // Creates a regular expression that includes letters and numbers
    const regex = /\w/g;

    // Converts all the letters in the string to lowercase
    const lowerStr = str.toLowerCase();

    // Extracts the alphanumeric characters and creates a reversed copy of the array
    const test = lowerStr.match(regex);
    const reverse = lowerStr.match(regex).reverse();

    // Return the outcome of the comparison which will either be true or false
    return test.every((value, index) => value === (reverse[index]));
};

/*
// TOP solution
const palindromes = function (string) {
  // Since we only consider letters and numbers, create a variable containing all valid characters
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

  // Create a new reversed string for comparison
  const reversedString = cleanedString.split('').reverse().join('');

  // Return the outcome of the comparison which will either be true or false
  return cleanedString === reversedString;
};
*/

// Do not edit below this line
module.exports = palindromes;
