const calc = require("../calculator");

describe("Calculator", () => {
  // add
  describe("Addition", () => {
    it("should return the correct sum of two numbers", () => {
      // Arrange
      const a = 2,
        b = 3;

      // Act
      const result = calc(a, "+", b);

      //Assert
      expect(result).toBe(5);
    });

    it("should handle negative numbers correctly", () => {
      const a = -8,
        b = 5;

      const result = calc(a, "+", b);

      expect(result).toBe(-3);
    });
  });

  // sub
  describe("Subtraction", () => {
    it("should return the correct difference of two numbers", () => {
      const a = 5,
        b = 2;

      const result = calc(a, "-", b);

      expect(result).toBe(3);
    });
  });

  // mul
  describe("Multiplication", () => {
    it("should return the correct product of two numbers", () => {
      const a = 4,
        b = 6;

      const result = calc(a, "*", b);

      expect(result).toBe(24);
    });

    it("should handle decimal numbers correctly", () => {
      const a = 3.5,
        b = 2;

      const result = calc(a, "*", b);

      expect(result).toBe(7);
    });
  });

  // div
  describe("Division", () => {
    it("should return the correct quotient of two numbers", () => {
      const a = 10,
        b = 2;

      const result = calc(a, "/", b);

      expect(result).toBe(5);
    });

    it("should throw an error when dividing by zero", () => {
      const a = 6,
        b = 0;

      expect(() => calc(a, "/", b)).toThrow("Division by zero");
    });
  });

  // mixed
  describe("Mixed and Errors", () => {
    it("should throw an error for an invalid operator", () => {
      const a = 5,
        b = 3;

      expect(() => calc(a, "$", b)).toThrow("Invalid operator");
    });

    it("should throw an error for invalid input types", () => {
      const a = "2",
        b = 3;

      expect(() => calc(a, "+", b)).toThrow("Invalid input type");
    });
  });
});
