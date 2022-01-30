import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";


export const ProductType = new GraphQLObjectType({
    name: "Product",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        slug: { type: GraphQLString },
        brand: { type: GraphQLString }
    }),
});