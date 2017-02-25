import lazySlice from '../lazy-slice';

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
      test('passed no params should return a shallow copy of the array', () => {
        expect(slice4()).toEqual(['zero', 'one', 'two', 'three']);
      });
    });
  });
});
