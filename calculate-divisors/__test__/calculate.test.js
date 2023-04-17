const calculateDivisors = require("../calculate-divisors.js");

xdescribe("calculateDivisors", () => {
  test("should return a number", () => {
    expect(typeof calculateDivisors()).toBe("number");
  });
  test("calculate divisors of 3 and 5", () => {
    expect(calculateDivisors(4)).toBe(3);
    expect(calculateDivisors(6)).toBe(8);
    expect(calculateDivisors(16)).toBe(3 + 5 + 6 + 9 + 10 + 12 + 15);
  });
});
