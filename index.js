require('dotenv').config();
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');

const models = require('./models/index');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers/index');


const server = new ApolloServer({ typeDefs, resolvers, context: {...models} });
const dbURI = process.env.DB_URI;

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  })
  .catch((err) => console.log(err));

