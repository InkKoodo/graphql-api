require('dotenv').config();
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');

const models = require('./models/index');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers/index');


const server = new ApolloServer({ typeDefs, resolvers, context: {...models} });
const dbURI = process.env.DB_URI;

const mdbConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(dbURI, mdbConnectionOptions)
  .then((result) => {
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  })
  .catch((err) => console.log(err));

