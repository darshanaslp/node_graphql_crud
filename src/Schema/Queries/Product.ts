import { GraphQLList } from "graphql";
import { ProductType } from "../TypeDefs/Product";
import {Products} from "../../Entities/Products"


export const GET_ALL_PRODUCTS = {
    type:new GraphQLList (ProductType),
    resolve(){
        return Products.find();
    }
}