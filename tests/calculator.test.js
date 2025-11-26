const calc = require("../calculator");

describe("Calculator", () => {
  describe("Invalid inputs", () => {
    it("should throw an error if fewer than 3 arguments are provided", () => {
      // Arrange
      const args = [2, "+"];

      // Act & Assert
      expect(() => calc(...args)).toThrow("Insufficient arguments");
    });

    it("should throw an error for an invalid operator", () => {
      const args = [5, "$", 3];

      expect(() => calc(...args)).toThrow("Invalid operator");
    });

    it("should throw an error for invalid input types", () => {
      const args = ["2", "+", 3];

      expect(() => calc(...args)).toThrow("Invalid input type");
    });
  });

  describe("Addition", () => {
    it("should return the correct sum of two numbers", () => {
      //Arrange
      const a = 2,
        b = 3;

      // Act
      const result = calc(a, "+", b);

      // Assert
      expect(result).toBe(5);
    });

    it("should handle negative numbers correctly", () => {
      const result = calc(-8, "+", 5);
      expect(result).toBe(-3);
    });

    it("should ignore numbers bigger than 1000", () => {
      const result = calc(2, "+", 1001);
      expect(result).toBe(2);
    });
  });

  describe("Subtraction", () => {
    it("should return the correct difference of two numbers", () => {
      const result = calc(5, "-", 2);
      expect(result).toBe(3);
    });

    it("should ignore numbers bigger than 1000", () => {
      const result = calc(1001, "-", 2);
      expect(result).toBe(-2);
    });
  });

  describe("Multiplication", () => {
    it("should return the correct product of two numbers", () => {
      const result = calc(4, "*", 6);
      expect(result).toBe(24);
    });

    it("should handle decimal numbers correctly", () => {
      const result = calc(3.5, "*", 2);
      expect(result).toBe(7);
    });

    it("should skip multiplication if both numbers are >1000", () => {
      const result = calc(1001, "*", 1002);
      expect(result).toBe(0);
    });

    it("should handle multiplication if first number is >1000", () => {
      const result = calc(1001, "*", 2);
      expect(result).toBe(2);
    });

    it("should handle multiplication if second number is >1000", () => {
      const result = calc(2, "*", 1002);
      expect(result).toBe(2);
    });
  });

  describe("Division", () => {
    it("should return the correct quotient of two numbers", () => {
      const result = calc(10, "/", 2);
      expect(result).toBe(5);
    });

    it("should throw an error when dividing by zero", () => {
      expect(() => calc(6, "/", 0)).toThrow("Division by zero");
    });
  });

  describe("Multiple numbers / Order of operations", () => {
    it("should follow the correct order of operations", () => {
      const result1 = calc(2, "+", 3, "*", 4);
      expect(result1).toBe(14);

      const result2 = calc(10, "-", 2, "*", 3);
      expect(result2).toBe(4);
    });

    it("should handle multiple numbers correctly", () => {
      const result = calc(1, "+", 2, "*", 3, "+", 4);
      expect(result).toBe(11);
    });

    it("should ignore numbers >1000 in multiple operations", () => {
      const result = calc(1, "+", 1001, "*", 2, "+", 1002);
      expect(result).toBe(3);
    });
  });
});
