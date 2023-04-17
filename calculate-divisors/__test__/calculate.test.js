const calculateDivisors = require("../calculate-divisors.js");

describe("calculateDivisors", () => {
  test("should return a number", () => {
    expect(typeof calculateDivisors()).toBe("number");
  });
  test("calculate divisors of 3 and 5", () => {
    expect(calculateDivisors(1)).toBe(0);
    expect(calculateDivisors(5)).toBe(3);
    expect(calculateDivisors(6)).toBe(3 + 5);
    expect(calculateDivisors(10)).toBe(3 + 5 + 6 + 9);
    expect(calculateDivisors(12)).toBe(3 + 5 + 6 + 9 + 10);
    expect(calculateDivisors(15)).toBe(3 + 5 + 6 + 9 + 10 + 12);
  });
});
