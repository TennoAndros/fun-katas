const changeCalculator = require("../change-calculator");

describe("calculate change", () => {
  test("should return an object", () => {
    expect(typeof changeCalculator()).toEqual("object");
  });
  test("should calculate the coins needed for change in pence", () => {
    expect(changeCalculator(1).toBe({ 1: 1 }));
    expect(changeCalculator(2).toBe({ 2: 1 }));
    expect(changeCalculator(7).toBe({ 5: 1, 2: 1 }));
    expect(changeCalculator(13).toBe({ 10: 1, 2: 1, 1: 1 }));
  });
});
