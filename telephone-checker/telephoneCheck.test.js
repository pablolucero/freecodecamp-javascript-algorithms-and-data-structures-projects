const telephoneCheck = require('./telephoneCheck');

describe('The telephone checker must', () => {

  test('return true if the passed string looks like a valid US phone number', () => {
    expect(telephoneCheck('5555555555')).toBe(true);
    expect(telephoneCheck('55555555555')).toBe(false);
    expect(telephoneCheck('555555555')).toBe(false);
    expect(telephoneCheck('555-555-5555')).toBe(true);
    expect(telephoneCheck('555-555-555')).toBe(false);
    expect(telephoneCheck('555-5555-555')).toBe(false);
    expect(telephoneCheck('(555)555-5555')).toBe(true);
    expect(telephoneCheck('(555) 555-5555')).toBe(true);
    expect(telephoneCheck('(555)555-55555')).toBe(false);
    expect(telephoneCheck('555)-555-5555')).toBe(false);
    expect(telephoneCheck('(555-555-5555')).toBe(false);
    expect(telephoneCheck('(555)5(55?)-5555')).toBe(false);
    expect(telephoneCheck('555 555 5555')).toBe(true);
    expect(telephoneCheck('1 555 555 5555')).toBe(true);
    expect(telephoneCheck('2 555 555 5555')).toBe(false);
    expect(telephoneCheck('1 555-555-5555')).toBe(true);
    expect(telephoneCheck('1 (555) 555-5555')).toBe(true);
    expect(telephoneCheck('123**&!!asdf#')).toBe(false);
    expect(telephoneCheck('(6054756961)')).toBe(false);
    expect(telephoneCheck('-1 (757) 622-7382')).toBe(false);
  });

});
