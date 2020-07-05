module.exports = function palindrome(inputText) {
  const normalizedInputText = normalizeText(inputText);
  return normalizedInputText === reverseString(normalizedInputText);
};

function normalizeText(inputText) {
  return removeNonAlphanumericChars(inputText.toLowerCase());
}

function removeNonAlphanumericChars(inputText) {
  return inputText.replace(/[^a-zA-Z0-9]/g, '');
}

function reverseString(inputText) {
  const arrayOfChars = inputText.split('');
  const reversedArray = arrayOfChars.reverse();
  return reversedArray.join('');
}
