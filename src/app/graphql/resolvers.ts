
import { CategoryResolver } from './resolvers/category.resolver';
import { ProductResolver } from './resolvers/product.resolver';
import { typeDefs } from './schema';
import { CategoryInput, ProductInput } from './inputs';


const resolvers = {
  Query: {
    product: async (_: any, args: ProductInput, context: any, info: any) => {
      const incomingQuery = info.operation.loc?.source.body;
      const productResolver = new ProductResolver();

      if (!args.id && !args.key) {
        throw new Error('Either id or key must be provided');
      }

      const identifier = args.id || args.key;
      if (!identifier) {
        throw new Error('Either id or key must be provided');
      }

      return productResolver.product(identifier, incomingQuery);
    },
    category: async (_: any, args: CategoryInput, context: any, info: any) => {
      const incomingQuery = info.operation.loc?.source.body;
      const categoryResolver = new CategoryResolver();

      if (!args.id && !args.key) {
        throw new Error('Either id or key must be provided');
      }

      const identifier = args.id || args.key;
      if (!identifier) {
        throw new Error('Either id or key must be provided');
      }

      return categoryResolver.category(identifier, incomingQuery);
    },
  },
};

export { typeDefs, resolvers };
