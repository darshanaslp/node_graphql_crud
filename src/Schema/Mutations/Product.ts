import { GraphQLID, GraphQLString } from "graphql";
import { ProductType } from "../TypeDefs/Product";
import { MessageType } from "../TypeDefs/Messages";
import { Products } from "../../Entities/Products"

//Mutation
//create product
export const CREATE_PRODUCT = {
    type: ProductType,
    args: {
        name: { type: GraphQLString },
        slug: { type: GraphQLString },
        brand: { type: GraphQLString }
    },

    async resolve(parent: any, args: any) {
        const { name, slug, brand } = args;
        await Products.insert({ name, slug, brand })
        return args;
    },
}

//update Product
export const UPDATE_PRODUCT = {
    type: MessageType,
    args: {
        name: { type: GraphQLString },
        slug: { type: GraphQLString },
        brand: { type: GraphQLString }
    },

    async resolve(parent: any, args: any) {
        const { name, slug, brand } = args;
        const product = await Products.findOne({ name: name })
        if (!product) {
            throw new Error("Product Not Exist");
        } try {
            await Products.update({ slug: slug }, { brand: brand })

            return { successful: true, message: "Product Update" }

        } catch {
            throw new Error("Prouct Not Match");
        }

    },
}

//delete Product
export const DELETE_PRODUCT = {
    type: MessageType,
    args: {
        id: { type: GraphQLID }
    },

    async resolve(parent: any, args: any) {
        const id = args.id;
        await Products.delete(id);

        return { successful: true, message: "Product Deleted" }

    },
}