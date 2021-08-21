// const User = require('../../models/User');

// Resolvers define the technique for fetching the types defined in the
// schema.

const Query = {
  users: (parent, args, {User}) => User.find()
};

module.exports = Query;