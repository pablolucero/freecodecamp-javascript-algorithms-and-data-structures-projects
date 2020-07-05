const palindrome = require('./palindrome');

describe('the palindrome checker', () => {

  test('must return true if the input text is a palindrome', () => {
    expect(palindrome('eye')).toBe(true);
  });

  test('must return false if the input text is not a palindrome', () => {
    expect(palindrome('eyes')).toBe(false);
  });

  test('must ignore all non-alphanumeric characters (punctuation, spaces and symbols)', () => {
    expect(palindrome('_eye')).toBe(true);
    expect(palindrome('2_A3 *3#A2')).toBe(true);
    expect(palindrome("0_0 (: /-\ :) 0-0")).toBe(true);
    expect(palindrome('five|\_/|four')).toBe(false);
  });

  test('must turn everything into the same case (lower or upper case) in order to check for palindromes', () => {
    expect(palindrome('RaceCar')).toBe(true);
    expect(palindrome('A man, a plan, a canal. Panama')).toBe(true);
  });

});
