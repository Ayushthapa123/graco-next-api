import { GraphQLClient, gql } from 'graphql-request';
import { getAccessToken } from 'utils/getAccessToken';

// Move this to environment variables
const endpoint = `${process.env.CTP_API_URL}/${process.env.CTP_PROJECT_KEY}/graphql`;

type GraphQLResponse = {
  category: Record<string, any>;
};

export class CategoryResolver {
  async category(identifier: string, queryString: string): Promise<Record<string, any>> {
    try {
      const token = await getAccessToken(); 
      console.log('ttttttttt',token)
      console.log("tokentttttttttttttttttttttt",token);
      console.log("queryString",queryString);

      const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      // Determine if identifier is an ID or key
      const isId = identifier.length === 36; // UUIDs are 36 characters
      const variables = isId ? { id: identifier } : { key: identifier };
      
      // Use the query string directly
      const response = await graphQLClient.request<GraphQLResponse>(queryString, variables);
      
      // Return the raw response to allow frontend to handle the data structure
      return response.category;
    } catch (error) {
      // Log the error for debugging
      console.error('GraphQL query error:', error);
      
      // Throw a more user-friendly error
      throw new Error('Failed to fetch category data. Please check your query and try again.');
    }
  }
} 