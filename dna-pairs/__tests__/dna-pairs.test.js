const dnaPairs = require("../dna-pairs.js");

describe("dnaPairs()", () => {
  test('should return [ ["G", "C"] ]', () => {
    expect(dnaPairs("G")).toEqual([["G", "C"]]);
    expect(dnaPairs("AG")).toEqual([
      ["A", "T"],
      ["G", "C"],
    ]);
    expect(dnaPairs("ATAG")).toEqual([
      ["A", "T"],
      ["T", "A"],
      ["A", "T"],
      ["G", "C"],
    ]);
  });
});
