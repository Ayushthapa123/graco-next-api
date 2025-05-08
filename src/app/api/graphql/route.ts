import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs } from 'app/graphql/schema';
import { resolvers } from 'app/graphql/resolvers';
import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()
  
  ],
  
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({}),

});

export { handler as GET, handler as POST }; 