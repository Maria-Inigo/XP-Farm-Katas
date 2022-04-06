const { leastLarger, getNumberOfPages } = require('../src/index');

describe('GIVEN the leastLarger function', () => {
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
  describe('WHEN we enter a summary with a number of digits lower than 9', () => {
    test.each`
      summaryLength | numberOfPages
      ${0}          | ${0}
      ${5}          | ${5}
      ${9}          | ${9}
    `(
      'THEN if summary has length $summaryLength, the result is the same number of pages',
      ({ summaryLength, numberOfPages }) => {
        expect(getNumberOfPages(summaryLength)).toBe(numberOfPages);
      },
    );
  });
  describe('WHEN we enter a summary with a number of digits higher than 9 and lower than 100', () => {
    test.each`
      summaryLength | numberOfPages
      ${25}         | ${17}
      ${31}         | ${20}
      ${99}         | ${54}
    `(
      'THEN if summary has length $summaryLength, the result is the length of the consecutive numbers of $numberOfPages pages',
      ({ summaryLength, numberOfPages }) => {
        expect(getNumberOfPages(summaryLength)).toBe(numberOfPages);
      },
    );
  });
  describe('WHEN we enter a summary with a number of digits higher than 9 and lower than 1000', () => {
    test.each`
      summaryLength | numberOfPages
      ${100}        | ${55}
      ${105}        | ${57}
      ${999}        | ${54}
    `(
      'THEN if summary has length $summaryLength,the result is the length of the consecutive numbers of $numberOfPages pages',
      ({ summaryLength, numberOfPages }) => {
        expect(getNumberOfPages(summaryLength)).toBe(numberOfPages);
      },
    );
  });
});
