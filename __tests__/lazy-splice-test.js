// The splice() method changes the content of an array by
// removing existing elements and/or adding new elements.

// array.splice(start)
// array.splice(start, deleteCount)
// array.splice(start, deleteCount, item1, item2, ...)
import lazySplice from '../lazy-splice';

const eq = a => b => a === b;

describe('Lazy splice', () => {
  test('should be a function', () => {
    expect(typeof lazySplice).toBe('function');
  });
  test('should return a function when invoked', () => {
    expect(typeof lazySplice()).toEqual('function');
  });
  describe('of ["zero", "one", "two", "three"]', () => {
    describe('mutation by addition of elements', () => {
      let orig;
      let arr4;
      beforeAll(() => {
        orig = ['zero', 'one', 'two', 'three'];
        arr4 = lazySplice(orig);
      });

      describe('passed the params (1, 3, "other")', () => {
        test('should drop the "other" arg, and return the last three elements beginning at the "one-th" indice', () => {
          const mutated = arr4(1, 3, 'other');
          expect(mutated).toEqual(['one', 'two', 'three']);
        });
        test('should mutate the original array', () => {
          expect(orig).toEqual(['zero']);
        });
      });
    });
    describe('mutation by removal of elements', () => {
      let orig;
      let mutated;
      let arr4;
      beforeAll(() => {
        orig = ['zero', 'one', 'two', 'three'];
        arr4 = lazySplice(orig);
        mutated = arr4(1, 3);
      });
      describe('passed the params (1, 3)', () => {
        test('should return the second and third items', () => {
          expect(mutated).toEqual(['one', 'two', 'three']);
        });
        test('should mutate the original array', () => {
          expect(orig).toEqual(['zero']);
        });
      });
    });
  });
});
