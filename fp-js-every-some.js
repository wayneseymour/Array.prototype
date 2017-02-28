/*
Return a function that takes a list of valid users,
and returns a function that returns true if all of
the supplied users exist in the original list of users.

You only need to check that the ids match.
*/

// checkUsersValid :: validUsersList -> maybeValidList -> boolean
const checkUsersValid = valids =>
  submissions => submissions.every(submission => valids.some(valid => submission.id === valid.id));

// // /* test code */
// (() => {
//   var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];
//
//   var testAllValid = checkUsersValid(goodUsers);
//
//   console.log(testAllValid([{ id: 2 }, { id: 1 }]));
//
//   console.log(testAllValid([{ id: 2 }, { id: 4 }, { id: 1 }]));
// })();

export default checkUsersValid;
