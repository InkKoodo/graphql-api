const { filterEmptyArguments } = require('../../helpers');

const Mutation = {
  createUser: async (parent, args, {User}) => {
    const {firstName, lastName, email, city} = args;

    try {
      const newUser = new User ({
        firstName, 
        lastName, 
        email, 
        city
      })
      const result = await newUser.save();
      return result;
    } catch (err) {
      return console.log(err)
    };
  },

  updateUser: async (parent, args, {User}) => {
    const existFields = filterEmptyArguments(args);
    const applyUpdate = await User.findOneAndUpdate({_id: args.id}, existFields, {new: true})
    return applyUpdate;
  },

  addProduct: async(parent, args, {Product}) => {
    const {ownerId, image, title, description, price} = args;
    try {
      const newProduct = new Product({
        ownerId, 
        image, 
        title, 
        description, 
        price
      })
      const result = await newProduct.save();
      return result;
    } catch (err) {console.log(err)};
  }
};

module.exports = Mutation;