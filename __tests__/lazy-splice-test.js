import lazySplice from '../lazy-splice';

const eq = a => b => a === b;

describe('Lazy splice', () => {
  test('should be a function', () => {
    expect(typeof lazySplice).toBe('function');
  });
  test('should return a function when invoked', () => {
    expect(typeof lazySplice()).toEqual('function');
  });
  xdescribe('of ["zero", "one", "two", "three"]', () => {
    const arr4 = ['zero', 'one', 'two', 'three'];
    const slice4 = lazySplice(arr4);

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
