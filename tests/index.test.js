const { leastLarger } = require('../src/index');

describe("GIVEN the Least Larger",()=>{
  describe("WHEN we want to find the next larger number",()=>{
    it("THEN the function should return -1 if we don´t provide set of numbers and an index",()=>{
      expect(leastLarger()).toBe(-1);
    });
    it("THEN the function should return -1 if there is no value at the given index",()=>{
      expect(leastLarger([1, 2], 5)).toBe(-1);
    });
    it("THEN the function should return -1 if there is only one number in the set",()=>{
      expect(leastLarger([1], 0)).toBe(-1);
    });
    it("THEN the function should return 1 if the next larger number to the indicated by the given index is in the index 1: [1, 3] & 0",()=>{
      expect(leastLarger([1,3], 0)).toBe(1);
    });
    it("THEN the function should return 2 if the next larger number to the indicated by the given index is in the 2nd index: [2, 1, 3] & 0",()=>{
      expect(leastLarger([2,1,3], 0)).toBe(2);
    });
  });
});
