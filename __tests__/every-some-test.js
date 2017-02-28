import checkUsersValid from '../fp-js-every-some';

describe('[].every and [].some', () => {
  describe('used to compare values with two lists', () => {
    const goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const testAllValid = checkUsersValid(goodUsers);

    test(`should return true if every id in the submitted list is within the closure list`, () => {
      expect(testAllValid([{ id: 2 }, { id: 1 }])).toBeTruthy();
    });
    test(`should return false if the submitted list has any id's that are not within the closure list`, () => {
      expect(testAllValid([{ id: 2 }, { id: 4 }])).toBeFalsy();
    });
  });
});
