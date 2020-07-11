/**
 * Return the given number roman numeral version in upper-case
 *
 * @param {number} input: a number from 1 to 3999
 */
module.exports = function convertToRoman(input) {
  validateInput(input);

  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let romanResult = '';

  for (let i = 0; i < values.length; i++) {
    if (input >= values[i]) {
      romanResult += concatSymbolNTimes(symbols[i], Math.floor(input / values[i]));
      input = input % values[i];
    }
  }

  return romanResult;
};

function concatSymbolNTimes(symbol, times) {
  let result = '';

  for (let i = 0; i < times; i++) {
    result += symbol;
  }

  return result;
}

function validateInput(number) {
  if (number === 0) {
    throw new Error('Zero not defined');
  }
  if (number < 0) {
    throw new Error('Negative numbers not defined');
  }
}
