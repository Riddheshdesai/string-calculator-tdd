// stringCalculator.test.js
import { add } from "../src/utils/stringCalculator";

describe("String Calculator", () => {
  test("return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself for a single number input", () => {
    expect(add("1")).toBe(1);
  });

  test("returns the sum of two numbers separated by a comma", () => {
    expect(add("1,2")).toBe(3);
  });
});
