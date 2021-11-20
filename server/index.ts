import { ApolloServer } from 'apollo-server';
import { join } from 'path'
import { readFileSync } from 'fs'
import * as resolvers from './resolvers';

// Load schema from the file
const typeDefs = readFileSync(join(__dirname, './schema.graphql')).toString('utf-8')

const server = new ApolloServer({
  mocks: true,
  mockEntireSchema: false,
  resolvers,
  typeDefs,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
