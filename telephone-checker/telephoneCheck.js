module.exports = function telephoneCheck(aPhoneString) {

  const validRegexCollection = [
    /^1?\d{10}$/,
    /^1?\d{3}-\d{3}-\d{4}$/,
    /^1?\(\d{3}\)\d{3}-\d{4}$/,
  ];

  return checkIfIsValid(validRegexCollection, removeWhiteSpace(aPhoneString));
};

function removeWhiteSpace(aPhoneString) {
  return aPhoneString.replace(/ /g, '');
}

function checkIfIsValid(validRegexCollection, normalizedPhoneString) {
  let isValid = false;

  for (const regExp of validRegexCollection) {
    if (regExp.test(normalizedPhoneString)) {
      isValid = true;
      break;
    }
  }
  return isValid;
}

