function cccc(result, num, baseNumber) {
  result += getRomanSymbol(baseNumber);
  result += addSticks(num - baseNumber);
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
module.exports = function convertToRoman(num) {
  if (num === 0) {
    throw new Error('Zero not defined');
  }
  if (num < 0) {
    throw new Error('Negative numbers not defined');
  }

  if (num === 4) return 'IV';
  if (num === 9) return 'IX';
  if (num === 14) return 'XIV';
  if (num === 19) return 'XIX';

  let result = '';

  if (num >= 1 && num <= 3) {
    result = cccc(result, num, 1);
  }

  if (num >= 5 && num <= 8) {
    result = cccc(result, num, 5);
  }

  if (num >= 10 && num <= 13) {
    result = cccc(result, num, 10);
  }

  if (num >= 15 && num <= 18) {
    result += 'XV';
    result += addSticks(num - 15);
  }

  if (num >= 20 && num <= 23) {
    result += 'XX';
    result += addSticks(num - 20);
  }

  if (num === 50) return 'L';
  if (num === 100) return 'C';
  if (num === 500) return 'D';
  if (num === 1000) return 'M';


  return result;
};

function addSticks(num) {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += 'I';
  }
  return result;
}
