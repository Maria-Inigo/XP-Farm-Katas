const { leastLarger, getNumberOfPages } = require('../src/index');

describe('GIVEN the Least Larger', () => {
  describe('WHEN we want to find the next larger number', () => {
    it('THEN the function should return -1 if we don´t provide set of numbers and an index', () => {
      expect(leastLarger()).toBe(-1);
    });
    it('THEN the function should return -1 if there is no value at the given index', () => {
      expect(leastLarger([1, 2], 5)).toBe(-1);
    });
    it('THEN the function should return -1 if there is only one number in the set', () => {
      expect(leastLarger([1], 0)).toBe(-1);
    });
    it('THEN the function should return 1 if the next larger number to the indicated by the given index is in the index 1: [1, 3] & 0', () => {
      expect(leastLarger([1, 3], 0)).toBe(1);
    });
    it('THEN the function should return 2 if the next larger number to the indicated by the given index is in the 2nd index: [2, 1, 3] & 0', () => {
      expect(leastLarger([2, 1, 3], 0)).toBe(2);
    });
  });
});

describe('GIVEN the getNumberOfPages function', () => {
  describe('WHEN we enter a summary with 0 digits', () => {
    test('THEN the function result in 0', () => {
      expect(getNumberOfPages(0)).toBe(0);
    });
  });
  describe('WHEN we enter a summary with 1 digit', () => {
    test('THEN the function result in 0', () => {
      expect(getNumberOfPages(1)).toBe(1);
    });
  });
});

describe('GIVEN the getNumberOfPages function', () => {
  describe('WHEN we enter a summary with a number of digits lower than 9', () => {
    test('THEN the function result is the same number of pages', () => {
      expect(getNumberOfPages(1)).toBe(1);
    });
  });
  describe('WHEN we enter a summary with a number of digits higher than 9', () => {
    test('THEN the result is the lengthe of the consecutive numbers that give the pages', () => {
      expect(getNumberOfPages(25)).toBe(17);
    });
  });
  describe('WHEN we enter a summary with a number of digits higher than 9', () => {
    test('THEN the result is the lengthe of the consecutive numbers that give the pages', () => {
      expect(getNumberOfPages(105)).toBe(57);
    });
  });
});
