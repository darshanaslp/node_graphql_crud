import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {GET_ALL_PRODUCTS} from "./Queries/Product"
import {CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from "./Mutations/Product"


const RootQuery = new GraphQLObjectType({
     // Graphql Query
    name: "RootQuery",
    fields: {
        getAllProducts:GET_ALL_PRODUCTS
    }, 
});

const Mutation = new GraphQLObjectType({
   // Graphql mutattions
    name: "Mutation",
    fields: {
        createProduct:CREATE_PRODUCT,
        deleteProduct:DELETE_PRODUCT,
        updateProduct:UPDATE_PRODUCT,
    }
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});