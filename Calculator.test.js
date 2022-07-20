const Calculator = require('./calculator');

describe('return  add, subtract, divide, and multiply from the passed numbers', () => {
  describe('Add 2 numbers that are passed in', () => {
    test('return 10 as the sum of 5 and 5', () => {
      expect(Calculator.add(5, 5)).toBe(10);
    });

    test('return 62 as the sum of 25 and 37', () => {
      expect(Calculator.add(25, 37)).toEqual(62);
    });

    test('return 3748 as the sum of 1050 and 2698', () => {
      expect(Calculator.add(1050, 2698)).toEqual(3748);
    });
  });

  describe('Substract 2 numbers that are passed in', () => {
    test('return 2 as the substraction of 7 and 5', () => {
      expect(Calculator.subtract(7, 5)).toBe(2)
    });

    test('return 60 as the substraction of 190 and 130', () => {
      expect(Calculator.subtract(190, 130)).toBe(60)
    });

    test('return 2000 as the substraction of 5000 and 3000', () => {
      expect(Calculator.subtract(5000, 3000)).toBe(2000)
    });
  });

  describe('Divide 2 numbers that are passed in', () => {
    test('return 2 as the division of 8 and 4', () => {
      expect(Calculator.divide(8, 4)).toBe(2)
    });

    test('return 60 as the division of 120 and 2', () => {
      expect(Calculator.divide(120, 2)).toBe(60)
    });

    test('return 2000 as the division of 8000 and 4', () => {
      expect(Calculator.divide(8000, 4)).toBe(2000)
    });
  });

  describe('Multiply 2 numbers that are passed in', () => {
    test('return 2 as the Multiply of 8 and 4', () => {
      expect(Calculator.multiply(2, 10)).toBe(20)
    });

    test('return 60 as the Multiply of 120 and 2', () => {
      expect(Calculator.multiply(130, 3)).toBe(390)
    });

    test('return 10000 as the Multiply of 2000 and 5', () => {
      expect(Calculator.multiply(2000, 5)).toBe(10000)
    });
  });
})

