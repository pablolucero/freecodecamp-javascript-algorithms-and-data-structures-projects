/**
 * 1 ➔ I
 * 2 ➔ II
 * 3 ➔ III
 * 4 ➔ IV
 * 5 ➔ V
 * 9 ➔ IX
 * 21 ➔ XXI
 * 50 ➔ L
 * 100 ➔ C
 * 500 ➔ D
 * 1000 ➔ M
 */
module.exports = function convertToRoman(input) {
  if (input === 0) {
    throw new Error('Zero not defined');
  }
  if (input < 0) {
    throw new Error('Negative numbers not defined');
  }

  let romanResult = '';

  if (input >= 1000) {
    romanResult += concatSymbolNTimes("M", Math.floor(input / 1000));
    input = input % 1000;
  }

  if (input >= 900) {
    romanResult += "CM";
    input -= 900;
  }

  if (input >= 500) {
    romanResult += concatSymbolNTimes("D", Math.floor(input / 500));
    input = input % 500;
  }

  if (input >= 400) {
    romanResult += "CD";
    input -= 400;
  }

  if (input >= 100) {
    romanResult += concatSymbolNTimes("C", Math.floor(input / 100));
    input = input % 100;
  }

  if (input >= 90) {
    romanResult += "XC";
    input -= 90;
  }

  if (input >= 50) {
    romanResult += concatSymbolNTimes("L", Math.floor(input / 50));
    input = input % 50;
  }

  if (input >= 40) {
    romanResult += "XL";
    input -= 40;
  }

  if (input >= 10) {
    romanResult += concatSymbolNTimes("X", Math.floor(input / 10));
    input = input % 10;
  }

  if (input === 9) {
    romanResult += "IX";
    input -= 9;
  }

  if (input >= 5) {
    romanResult += "V";
    input -= 5;
  }

  if (input === 4) {
    romanResult += "IV";
    input -= 4;
  }

  if (input >= 1) {
    romanResult += concatSymbolNTimes('I', input);
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
