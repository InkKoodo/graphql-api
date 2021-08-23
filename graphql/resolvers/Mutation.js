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
    } catch (err) {console.log(err)};
  },

  updateUser: async (parent, args, {User}) => {
    try {
      const existFields = filterEmptyArguments(args);
      const applyUpdate = await User.findOneAndUpdate({_id: args.id}, existFields, {new: true})
      return applyUpdate;
    } catch (err) {console.log(err)}
  },

  deleteUser: async (parent, {id}, {User}) => {
    try {
      await User.findOneAndDelete({_id: id});
      return true;
    } catch (err) {
      console.log(err)
      return false;
    }
  },

  createProduct: async(parent, args, {Product}) => {
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
  },

  updateProduct: async (parent, args, {Product}) => {
    try {
      const existFields = filterEmptyArguments(args);
      const applyUpdate = await Product.findOneAndUpdate({_id: args.id}, existFields, {new: true});

      return applyUpdate;
    } catch (err) {console.log(err)}

  },

  deleteProduct: async (parent, {id}, {Product}) => {
    try {
      await Product.findOneAndDelete({_id: id});
      return true;
    } catch (err) {
      console.log(err)
      return false;
    }
  }
};

module.exports = Mutation;