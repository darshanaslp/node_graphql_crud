import { graphql } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { GET_ALL_PRODUCTS } from "../Schema/Queries/Product";
import { ProductType } from "../Schema/TypeDefs/Product";


const schema = makeExecutableSchema({ ProductType, GET_ALL_PRODUCTS });

export const graphqlTestCall = async (
  query: any,
  variables?: any,
  userId?: number | string
) => {
  return graphql(
    schema,
  );
};