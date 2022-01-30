import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";


export const ProductType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        slug: { type: GraphQLString },
        brand: { type: GraphQLString }
    }),
});