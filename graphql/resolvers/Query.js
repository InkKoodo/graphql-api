// const User = require('../../models/User');

const Query = {
  users: (parent, args, {User}) => User.find(),
  user: (parent, {id}, {User}) => User.findOne({_id: id}),
};

module.exports = Query;