const convertToRoman = require('./convertToRoman');

describe('Roman numeral converter', () => {
  test('convertToRoman(num) must convert the given number into a roman numeral in upper-case', () => {
    expect(() => convertToRoman(-1)).toThrowError('Negative numbers not defined');
    expect(() => convertToRoman(0)).toThrowError('Zero not defined');
    expect(convertToRoman(1)).toBe('I');
    expect(convertToRoman(2)).toBe('II');
    expect(convertToRoman(3)).toBe('III');
    expect(convertToRoman(4)).toBe('IV');
    expect(convertToRoman(5)).toBe('V');
    expect(convertToRoman(6)).toBe('VI');
    expect(convertToRoman(7)).toBe('VII');
    expect(convertToRoman(8)).toBe('VIII');
    expect(convertToRoman(9)).toBe('IX');
    expect(convertToRoman(10)).toBe('X');
    expect(convertToRoman(11)).toBe('XI');
    expect(convertToRoman(12)).toBe('XII');
    expect(convertToRoman(13)).toBe('XIII');
    expect(convertToRoman(14)).toBe('XIV');
    expect(convertToRoman(15)).toBe('XV');
    expect(convertToRoman(16)).toBe('XVI');
    expect(convertToRoman(17)).toBe('XVII');
    expect(convertToRoman(18)).toBe('XVIII');
    expect(convertToRoman(19)).toBe('XIX');
    expect(convertToRoman(20)).toBe('XX');
    expect(convertToRoman(21)).toBe('XXI');
    expect(convertToRoman(22)).toBe('XXII');
    expect(convertToRoman(23)).toBe('XXIII');

    expect(convertToRoman(50)).toBe('L');
    expect(convertToRoman(100)).toBe('C');
    expect(convertToRoman(500)).toBe('D');
    expect(convertToRoman(1000)).toBe('M');
  });
});
