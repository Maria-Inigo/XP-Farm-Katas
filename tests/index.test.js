describe("GIVEN the Least Larger",()=>{
  describe("WHEN we want to find the next larger number",()=>{
    it("THEN the function should return -1 if we don´t provide set of numbers and an index",()=>{
      assert.strictEqual(leastLarger(), -1);
    });
    it("THEN the function should return -1 if there is no value at the given index",()=>{
      assert.strictEqual(leastLarger([1, 2], 5), -1);
    });
    it("THEN the function should return -1 if there is only one number in the set",()=>{
      assert.strictEqual(leastLarger([1], 0), -1);
    });
    it("THEN the function should return 1 if the next larger number to the indicated by the given index is in the index 1: [1, 3] & 0",()=>{
      assert.strictEqual(leastLarger([1,3], 0), 1);
    });
  });
});
