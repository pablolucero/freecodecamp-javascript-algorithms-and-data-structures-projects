const rot13 = require('./rot13');

describe('Caesar cipher', () => {
  test('rot13 function must replaces each UPPER CASE letter of the input string with the 13th letter after it in the alphabet', () => {
    expect(rot13("")).toBe("");
    expect(rot13(" ")).toBe(" ");
    expect(rot13("A")).toBe("N");
    expect(rot13(" A ")).toBe(" N ");
    expect(rot13("B")).toBe("O");
    expect(rot13("M")).toBe("Z");
    expect(rot13("N")).toBe("A");
    expect(rot13("Z")).toBe("M");
    expect(rot13("AA")).toBe("NN");
    expect(rot13("SERR PBQR PNZC")).toBe("FREE CODE CAMP");
    expect(rot13("SERR CVMMN!")).toBe("FREE PIZZA!");
    expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
      .toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
  });

  test('rot13 function must leave anything that doesn’t come between A-Z as it is', () => {
    expect(rot13("abc")).toBe("abc");
    expect(rot13("123")).toBe("123");
  });

  test('rot13 function must fail if the input is not a string', () => {
    expect(() => rot13(null))
      .toThrowError("The encoded input must be a string");
  });
});
