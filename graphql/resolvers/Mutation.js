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
    // const {id, firstName, lastName, email, city} = args;
    // // const updatedFields = {
    // //   ...args
    // // }
    // const user = await User.findOne({_id: id})
    // console.log(user.tree)
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