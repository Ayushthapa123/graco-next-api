import { gql } from 'graphql-request';
import { ProductData } from '@commercetools/platform-sdk';

export const typeDefs = gql`
  scalar JSON

  type Category {
    id: ID!
    key: String!
    version: Int!
    name: String!
    slug: String!
    description: String
    createdAt: String!
    lastModifiedAt: String!
  }

  type Query {
    category(id: String, key: String): Category
    product(id: String, key: String): Product
  }

  type Product {
    id: ID!
    key: String!
    version: Int!
    createdAt: String!
    lastModifiedAt: String!
    masterData: ProductMasterData
  }

  type ProductMasterData  {
    current: ProductData
  }

  type ProductData {
    name(locale: String): String
    description(locale: String): String
    masterVariant: ProductVariant
    variants: [ProductVariant!]!
  }

  type ProductVariant {
    id: ID!
    attributesRaw: [Attribute!]
    assets: [Asset!]
    images: [Image!]
    prices: [Price!]
  }

  type Attribute {
    name: String!
    value: JSON!
  }

  type LocalizedValue {
    en: String
    enGB: String
    enUS: String
  }

  type Asset {
    name: String!
  }

  type Image {
    url: String!
  }

  type Price {
    value: MoneyValue
    discounted: DiscountedPrice
  }

  type MoneyValue {
    centAmount: Int!
    currencyCode: String
  }

  type DiscountedPrice {
    value: MoneyValue
    discount: Discount
  }

  type Discount {
    predicate: String
    isValid: Boolean
  }
`;
