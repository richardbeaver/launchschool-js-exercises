import RomanNumeral from "./roman-numeral.js";

describe("RomanNumeral", () => {
  test("1", () => {
    const number = new RomanNumeral(1);
    expect(number.toRoman()).toBe("I");
  });

  test("2", () => {
    const number = new RomanNumeral(2);
    expect(number.toRoman()).toBe("II");
  });

  test("3", () => {
    const number = new RomanNumeral(3);
    expect(number.toRoman()).toBe("III");
  });

  test("4", () => {
    const number = new RomanNumeral(4);
    expect(number.toRoman()).toBe("IV");
  });

  test("5", () => {
    const number = new RomanNumeral(5);
    expect(number.toRoman()).toBe("V");
  });

  test("6", () => {
    const number = new RomanNumeral(6);
    expect(number.toRoman()).toBe("VI");
  });

  test("9", () => {
    const number = new RomanNumeral(9);
    expect(number.toRoman()).toBe("IX");
  });

  test("27", () => {
    const number = new RomanNumeral(27);
    expect(number.toRoman()).toBe("XXVII");
  });

  test("48", () => {
    const number = new RomanNumeral(48);
    expect(number.toRoman()).toBe("XLVIII");
  });

  test("59", () => {
    const number = new RomanNumeral(59);
    expect(number.toRoman()).toBe("LIX");
  });

  test("93", () => {
    const number = new RomanNumeral(93);
    expect(number.toRoman()).toBe("XCIII");
  });

  test("141", () => {
    const number = new RomanNumeral(141);
    expect(number.toRoman()).toBe("CXLI");
  });

  test("163", () => {
    const number = new RomanNumeral(163);
    expect(number.toRoman()).toBe("CLXIII");
  });

  test("402", () => {
    const number = new RomanNumeral(402);
    expect(number.toRoman()).toBe("CDII");
  });

  test("575", () => {
    const number = new RomanNumeral(575);
    expect(number.toRoman()).toBe("DLXXV");
  });

  test("911", () => {
    const number = new RomanNumeral(911);
    expect(number.toRoman()).toBe("CMXI");
  });

  test("1024", () => {
    const number = new RomanNumeral(1024);
    expect(number.toRoman()).toBe("MXXIV");
  });

  test("3000", () => {
    const number = new RomanNumeral(3000);
    expect(number.toRoman()).toBe("MMM");
  });
});
