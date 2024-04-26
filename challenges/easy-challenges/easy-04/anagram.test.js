import Anagram from "./anagram.js";

describe("Anagram", () => {
  test("No matches returns empty array", () => {
    const detector = new Anagram("diaper");
    expect(detector.match(["hello", "world", "zombies", "pants"])).toEqual([]);
  });

  test("Detect simple anagram", () => {
    const detector = new Anagram("ant");
    const anagrams = detector.match(["tan", "stand", "at"]);
    expect(anagrams).toEqual(["tan"]);
  });

  test("Detect multiple anagrams", () => {
    const detector = new Anagram("master");
    const anagrams = detector.match(["stream", "pigeon", "maters"]);
    expect(anagrams.sort()).toEqual(["maters", "stream"]);
  });

  test("Do not confuse different duplicates", () => {
    const detector = new Anagram("galea");
    expect(detector.match(["eagle"])).toEqual([]);
  });

  test("Identical word is not anagram", () => {
    const detector = new Anagram("corn");
    const anagrams = detector.match([
      "corn",
      "dark",
      "Corn",
      "rank",
      "CORN",
      "cron",
      "park",
    ]);
    expect(anagrams).toEqual(["cron"]);
  });

  test("Eliminate anagrams with same checksum", () => {
    const detector = new Anagram("mass");
    expect(detector.match(["last"])).toEqual([]);
  });

  test("Eliminate anagram subsets", () => {
    const detector = new Anagram("good");
    expect(detector.match(["dog", "goody"])).toEqual([]);
  });

  test("Detect anagram", () => {
    const detector = new Anagram("listen");
    const anagrams = detector.match(["enlists", "google", "inlets", "banana"]);
    expect(anagrams).toEqual(["inlets"]);
  });

  test("Multiple anagrams", () => {
    const detector = new Anagram("allergy");
    const anagrams = detector.match([
      "gallery",
      "ballerina",
      "regally",
      "clergy",
      "largely",
      "leading",
    ]);
    expect(anagrams.sort()).toEqual(["gallery", "largely", "regally"]);
  });

  test("Anagrams are case-insensitive", () => {
    const detector = new Anagram("Orchestra");
    const anagrams = detector.match(["cashregister", "Carthorse", "radishes"]);
    expect(anagrams).toEqual(["Carthorse"]);
  });
});
