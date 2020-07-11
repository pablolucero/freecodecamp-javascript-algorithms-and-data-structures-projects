const checkCashRegister = require('./checkCashRegister');

describe('Cash Register', () => {
  test('checkCashRegister() function should always return an object with a status key and a change key.', () => {
    const actual = checkCashRegister(19.5, 20,
      [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 1],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
      ]);
    expect(actual).toHaveProperty('status');
    expect(actual).toHaveProperty('change');
  });
});
