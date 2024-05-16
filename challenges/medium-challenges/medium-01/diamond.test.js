import * as Diamond from "./diamond.js";

describe("Diamond", () => {
  test("letter a", () => {
    const answer = Diamond.makeDiamond("A");
    expect(answer).toBe("A\n");
  });

  test("letter b", () => {
    const answer = Diamond.makeDiamond("B");
    expect(answer).toBe(" A \nB B\n A \n");
  });

  test("letter c", () => {
    const answer = Diamond.makeDiamond("C");
    const expected = "  A  \n" + " B B \n" + "C   C\n" + " B B \n" + "  A  \n";
    expect(answer).toBe(expected);
  });

  test("letter e", () => {
    const answer = Diamond.makeDiamond("E");
    const expected =
      "    A    \n" +
      "   B B   \n" +
      "  C   C  \n" +
      " D     D \n" +
      "E       E\n" +
      " D     D \n" +
      "  C   C  \n" +
      "   B B   \n" +
      "    A    \n";
    expect(answer).toBe(expected);
  });
});
