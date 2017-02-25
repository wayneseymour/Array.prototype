import lazySlice from '../lazy-slice'

describe('Lazy slice of ["zero", "one", "two", "three"]', () => {
  const slice4 = lazySlice(['zero', 'one', 'two', 'three'])
  
  test('passed the params (1, 3)', () => {
    expect(slice4(1, 3)).toEqual(["one", "two"])
  });
  test('passed the param (0, 1)', () => {
    expect(slice4(0, 1)).toEqual(["zero"])
  });
});
