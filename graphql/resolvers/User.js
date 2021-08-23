const User = {
  postedProducts: async (parent, args, {Product}) => {
    const products = await Product.find({ownerId: parent.id})
    return products;
  }
}

module.exports = User;