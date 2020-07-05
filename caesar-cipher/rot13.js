/**
 * According to FFC specification,
 * this functions only decode UPPER CASE letters
 * and leave anything that doesn’t come between A-Z as it is
 *
 * @param anEncodedString
 * @returns {string}
 */
module.exports = function rot13(anEncodedString) {

  if (typeof anEncodedString !== 'string') {
    throw new Error('The encoded input must be a string');
  }

  const resultArray = [];

  for (const char of anEncodedString.split('')) {
    resultArray.push(decodeChar(char));
  }

  return resultArray.join('');
};

function decodeChar(char) {
  // Unicode   65              77   78             90
  // Input	    A   BCDEFGHIJKL M    N OPQRSTUVWXY Z
  // Output	    N   OPQRSTUVWXY Z    A BCDEFGHIJKL M

  const charCode = char.charCodeAt(0);

  if (charCode >= 65 && charCode <= 77) {
    return String.fromCharCode(charCode + 13);
  }
  if (charCode >= 78 && charCode <= 90) {
    return String.fromCharCode(charCode - 13);
  }

  return String.fromCharCode(charCode);
}
