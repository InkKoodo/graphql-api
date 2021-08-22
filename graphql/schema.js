const {gql} = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # This "Book" type defines the queryable fields for every book in our data source.
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String
    city: String!
  }

  type Product {
    id: ID!
    ownerId: ID!
    image: String!
    title: String!
    description: [String!]!
    price: Float!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(
      firstName: String!
      lastName: String!
      email: String
      city: String!
    ): User

    updateUser(
      id: ID!
      firstName: String
      lastName: String
      email: String
      city: String
    ) : User
  }
`;

module.exports = typeDefs;