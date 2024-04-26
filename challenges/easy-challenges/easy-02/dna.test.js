import DNA from "./dna";

describe("DNA", () => {
  test("no difference between empty strands", () => {
    const dna = new DNA("");
    expect(dna.hammingDistance("")).toBe(0);
  });

  test("no difference between identical strands", () => {
    const dna = new DNA("GGACTGA");
    expect(dna.hammingDistance("GGACTGA")).toBe(0);
  });

  test("complete hamming distance in small strand", () => {
    const dna = new DNA("ACT");
    expect(dna.hammingDistance("GGA")).toBe(3);
  });

  test("hamming distance in off by one strand", () => {
    const strand = "GGACGGATTCTGACCTGGACTAATTTTGGGG";
    const distance = "AGGACGGATTCTGACCTGGACTAATTTTGGGG";
    const dna = new DNA(strand);
    expect(dna.hammingDistance(distance)).toBe(19);
  });

  test("small hamming distance in middle somewhere", () => {
    const dna = new DNA("GGACG");
    expect(dna.hammingDistance("GGTCG")).toBe(1);
  });

  test("larger distance", () => {
    const dna = new DNA("ACCAGGG");
    expect(dna.hammingDistance("ACTATGG")).toBe(2);
  });

  test("ignores extra length on other strand when longer", () => {
    const dna = new DNA("AAACTAGGGG");
    expect(dna.hammingDistance("AGGCTAGCGGTAGGAC")).toBe(3);
  });

  test("ignores extra length on original strand when longer", () => {
    const dna = new DNA("GACTACGGACAGGGTAGGGAAT");
    const distance = "GACATCGCACACC";
    expect(dna.hammingDistance(distance)).toBe(5);
  });

  test("does not actually shorten original strand", () => {
    const dna = new DNA("AGACAACAGCCAGCCGCCGGATT");
    expect(dna.hammingDistance("AGGCAA")).toBe(1);
    expect(dna.hammingDistance("AGACATCTTTCAGCCGCCGGATTAGGCAA")).toBe(4);
    expect(dna.hammingDistance("AGG")).toBe(1);
  });
});
