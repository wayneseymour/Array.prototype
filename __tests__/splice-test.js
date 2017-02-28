// The splice() method changes the content of an array by
// removing existing elements and/or adding new elements.

// array.splice(start)
// array.splice(start, deleteCount)
// array.splice(start, deleteCount, item1, item2, ...)

describe('Array.prototype.splice', () => {
  describe('type', () => {
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
  describe('Remove 1 element from index 3', () => {
    let myFish;
    let removed;
    beforeAll(() => {
      myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
      removed = myFish.splice(3, 1);
    });
    test('should have removed "sturgeon"', () => {
      expect(removed).toEqual(['sturgeon']);
    });
    test('should have shortened the array', () => {
      expect(myFish.length).toBe(3);
    });
  });
  describe('Remove 1 element the end of an Array', () => {
    let xs;
    let removed;
    beforeAll(() => {
      xs = [1, 2, 3];
      removed = xs.splice(xs.length - 1, 1);
    });
    test('should have removed the last item', () => {
      expect(removed).toEqual([3]);
    });
    test('should have shortened the array', () => {
      expect(xs).toEqual([1, 2]);
    });
  });
  describe('Remove 1 element the end of an Array and add two elements', () => {
    let xs;
    let removed;
    beforeAll(() => {
      xs = [1, 2, 3];
      removed = xs.splice(xs.length - 1, 1, 4, 5);
    });
    test('should have removed the last item', () => {
      expect(removed).toEqual([3]);
    });
    test('should have shortened the array', () => {
      expect(xs).toEqual([1, 2, 4, 5]);
    });
  });
  describe('Remove 1 element from index 2, and insert trumpet', () => {
    let myFish;
    let removed;
    let length;
    beforeAll(() => {
      myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
      length = myFish.length;
      removed = myFish.splice(2, 1, 'trumpet');
    });
    test('should have set index two to "trumpet"', () => {
      expect(myFish[2]).toEqual('trumpet');
    });
    test('should not remove any indices', () => {
      expect(removed).toEqual(['mandarin']);
    });
    test('should still have the same length', () => {
      expect(length).toEqual(myFish.length);
    });
  });
  describe(
    `Remove 2 elements from index 0,
    and insert "parrot", "anemone" and "blue"`,
    () => {
      let myFish;
      let removed;
      let length;
      beforeAll(() => {
        myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
        length = myFish.length;
        removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
      });
      test('should have set index two to "blue"', () => {
        expect(myFish[2]).toEqual('blue');
      });
      test('should not remove any indices', () => {
        expect(removed).toEqual(['angel', 'clown']);
      });
      test('should have increased the length to five', () => {
        expect(myFish.length).toEqual(5);
      });
    }
  );
});
