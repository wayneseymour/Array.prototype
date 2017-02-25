import slice from '../slice'

test('["zero", "one", "two", "three"].slice(1,3) === ["one", "two"]', () => {
  const slice4 = slice(['zero', 'one', 'two', 'three']);
  expect(slice4(1, 3)).toEqual(["one", "two"]);
});
