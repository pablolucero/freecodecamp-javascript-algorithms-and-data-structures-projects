module.exports = function telephoneCheck(aPhoneString) {

  if (typeof aPhoneString !== 'string') {
    throw new Error('Phone number input must be a string');
  }
  return textMatchWithAny(removeWhiteSpace(aPhoneString), getValidRegexCollection());
};

function getValidRegexCollection() {
  // in all cases the number can start (or not) with the country code of 1
  return [
    /^1?\d{10}$/,                 // all digits 5555555555
    /^1?\d{3}-\d{3}-\d{4}$/,      // 555-555-5555
    /^1?\(\d{3}\)\d{3}-\d{4}$/,   // (555)555-5555
  ];
}

function removeWhiteSpace(aPhoneString) {
  return aPhoneString.replace(/ /g, '');
}

function textMatchWithAny(aString, aCollectionOfRegex) {
  let isValid = false;

  for (const regExp of aCollectionOfRegex) {
    if (regExp.test(aString)) {
      isValid = true;
      break;
    }
  }
  return isValid;
}

