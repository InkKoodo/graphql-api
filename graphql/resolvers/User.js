const User = {
  postedProducts: async (parent, args, {Product}) => {
    const {id} = parent;
    const products = await Product.find({ownerId: id})
    return products;
  }
}

module.exports = User;