// The splice() method changes the content of an array by
// removing existing elements and/or adding new elements.

// array.splice(start)
// array.splice(start, deleteCount)
// array.splice(start, deleteCount, item1, item2, ...)

describe('Array.prototype.splice', () => {
  describe('should be a function', () => {
    test('should be a function in longhand', () => {
      expect(typeof Array.prototype.splice).toBe('function');
    });
    test('should be a function in shorthand', () => {
      expect(typeof [].splice).toEqual('function');
    });
  });
  describe('Remove 0 elements from index 2, and insert "drum"', () => {
    let myFish;
    let removed;
    beforeAll(() => {
      myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
      removed = myFish.splice(2, 0, 'drum');
    });
    test('should not remove any indices', () => {
      expect(removed).toEqual([]);
    });
    test('should add a new indice to the array', () => {
      expect(myFish[2]).toBe('drum');
    });
  });
});
