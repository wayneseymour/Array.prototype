import lazySlice from '../lazy-slice';

const eq = a => b => a === b;

describe('slice.call()', () => {
  describe('invoked longhand', () => {
    test('should convert the arguments array-like object is es5 into a real array', () => {
      const f = function f() {
        expect(Array.prototype.slice.call(arguments)).toEqual([1, 2, 3]);
      };
      f(1, 2, 3);
    });
  });
  describe('invoked shorthand', () => {
    test('should convert the arguments array-like object is es5 into a real array', () => {
      const f = function f() {
        expect([].slice.call(arguments)).toEqual([1, 2, 3]);
      };
      f(1, 2, 3);
    });
  });
});
describe('Lazy slice', () => {
  test('should be a function', () => {
    expect(typeof lazySlice).toBe('function');
  });
  test('should return a function when invoked', () => {
    expect(typeof lazySlice()).toEqual('function');
  });
  describe('of ["zero", "one", "two", "three"]', () => {
    const arr4 = ['zero', 'one', 'two', 'three'];
    const slice4 = lazySlice(arr4);

    test('passed the params (1, 3) should return the second and third items', () => {
      expect(slice4(1, 3)).toEqual(['one', 'two']);
    });
    test('passed the param (0, 1) should return only the first (zeroth) item', () => {
      expect(slice4(0, 1)).toEqual(['zero']);
    });
    test('passed the params (1, 1) should return an empty array', () => {
      expect(slice4(1, 1)).toEqual([]);
    });

    describe('in shallow copying', () => {
      const result = slice4();

      test('should return false when a "sliced" array is compared to the array it was "sliced" from', () => {
        expect(eq(arr4, result)()).toBe(false);
      });
      test('passed no params should return a shallow copy of the array', () => {
        expect(result).toEqual(['zero', 'one', 'two', 'three']);
      });
    });
  });
});
