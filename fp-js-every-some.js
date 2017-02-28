/*
Return a function that takes a list of valid users,
and returns a function that returns true if all of
the supplied users exist in the original list of users.

You only need to check that the ids match.
*/

// checkUsersValid :: validUsersList -> maybeValidList -> boolean
const checkUsersValid = valids =>
  submissions => submissions.every(submission => valids.some(valid => submission.id === valid.id));

export default checkUsersValid;
