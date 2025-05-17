# Commercetools GraphQL Pass-through API

A GraphQL pass-through API built with Next.js that interfaces with Commercetools APIs. This project serves as a backend service that provides a GraphQL interface to interact with Commercetools' e-commerce platform.

## Overview

This project is a GraphQL pass-through API that acts as a middleware between your application and Commercetools' APIs. It's built using Next.js, though it's specifically used as a backend service rather than a full-stack application. Currently, it implements two main functionalities as a Proof of Concept (POC):

- Product details retrieval
- Categories retrieval

## Tech Stack

- **Framework**: Next.js 15.0.3
- **Language**: TypeScript
- **GraphQL**: Apollo Server (@apollo/server)
- **E-commerce Integration**: Commercetools Platform SDK
- **Additional Tools**:
  - GraphQL Playground for API testing
  - Axios for HTTP requests

## Prerequisites

- Node.js (Latest LTS version recommended)
- Yarn or npm package manager
- Commercetools account and API credentials

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Commercetools credentials
CTP_PROJECT_KEY=your_project_key
CTP_CLIENT_ID=your_client_id
CTP_CLIENT_SECRET=your_client_secret
CTP_AUTH_URL=your_auth_url
CTP_API_URL=your_api_url

# Other environment variables as needed
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Ayushthapa123/graco-next-api.git
cd commercetools-graco-apis
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Start the development server:
```bash
yarn dev
# or
npm run dev
```

The server will start on port 3000.

## Available Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build the application
- `yarn start` - Start the production server
- `yarn lint` - Run ESLint
- `yarn analyze` - Analyze bundle size

## API Endpoints

The project currently implements two main GraphQL endpoints:

1. **Product Details**
   - Endpoint: `/graphql`
   - Query: `getProduct`
   - Description: Retrieves detailed product information from Commercetools

2. **Categories**
   - Endpoint: `/graphql`
   - Query: `getCategories`
   - Description: Retrieves category information from Commercetools

You can access the GraphQL Playground at `http://localhost:3000/graphql` to test these endpoints.

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/         # API routes
│   │   ├── graphql/     # GraphQL resolvers and schema
│   │   └── page.tsx     # Main page component
│   ├── utils/           # Utility functions
│   └── middleware.ts    # API middleware
├── public/              # Static files
├── .env                # Environment variables
└── package.json        # Project dependencies and scripts
```

## Development

This project uses:
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Apollo Server for GraphQL implementation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License



## Support

