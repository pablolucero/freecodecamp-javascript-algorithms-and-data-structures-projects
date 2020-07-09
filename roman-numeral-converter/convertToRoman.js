function findRomanNumber(result, num, baseNumber) {
  result += getRomanSymbol(baseNumber);
  result += concatISymbolNTimes(num - baseNumber);
  return result;
}

function getRomanSymbol(number) {
  const numberToRomanSymbolMap = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };

  return numberToRomanSymbolMap[number];
}


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

  if (input % 10 === 4) {
    if (input === 4) return 'IV';
    if (input === 14) return 'XIV';
    if (input === 24) return 'XXIV';
    if (input === 34) return 'XXXIV';
  }
  if (input % 10 === 9) {
    if (input === 9) return 'IX';
    if (input === 19) return 'XIX';
    if (input === 29) return 'XXIX';
    if (input === 39) return 'XXXIX';
  }

  let result = '';

  if (input >= 1 && input <= 3) {
    result = findRomanNumber(result, input, 1);
  }

  if (input >= 5 && input <= 8) {
    result = findRomanNumber(result, input, 5);
  }

  if (input >= 10 && input <= 13) {
    result = findRomanNumber(result, input, 10);
  }

  if (input >= 15 && input <= 18) {
    result += 'XV';
    result += concatISymbolNTimes(input - 15);
  }

  if (input >= 20 && input <= 23) {
    result += 'XX';
    result += concatISymbolNTimes(input - 20);
  }

  if (input >= 25 && input <= 28) {
    result += 'XXV';
    result += concatISymbolNTimes(input - 25);
  }

  if (input >= 30 && input <= 33) {
    result += 'XXX';
    result += concatISymbolNTimes(input - 30);
  }

  if (input >= 35 && input <= 38) {
    result += 'XXXV';
    result += concatISymbolNTimes(input - 35);
  }

  if (input === 40) return 'XL';

  if (input === 50) return 'L';
  if (input === 100) return 'C';
  if (input === 500) return 'D';
  if (input === 1000) return 'M';


  return result;
}
;

function concatISymbolNTimes(num) {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += 'I';
  }
  return result;
}
