import { Connection } from "typeorm";

//import { graphqlTestCall } from "./TestCall";
import { createTestConn } from "./createTestConn ";
import { Products } from "../Entities/Products";
import { graphql } from "graphql";


export const graphqlTestCall = async (
  query: any,
  variables?: any,
  userId?: number | string
) => {};

const registerMutation = `
  mutation {
    createProduct($name:String!,$slug:String!,$brand:String!){
      name
      slug
      brad
    }
  }
`;


const meQuery = `
  query {
    getAllProducts {
      id
      name
      slug
      brand
    }
  }
`;

let conn: Connection;

beforeAll(async () => {
  conn = await createTestConn();
});

afterAll(async () => {
  await conn.close();
});

describe("resolvers", () => {
  it("register, Product", async () => {
    const testUser = { name: "test", slug: "item", brand: "local" };

    const registerResponse = await graphqlTestCall(registerMutation, {
      name: testUser.name,
      slug: testUser.slug,
      brand: testUser.brand,
    });

    expect(registerResponse).toEqual({ data: { register: true } });

    const dbUser = await Products.findOne({ where: { name: testUser.name } });

    expect(dbUser).toBeDefined();


    const meResponse = await graphqlTestCall(meQuery, {}, dbUser!.id);

    expect(meResponse).toEqual({
      data: {
        me: {
          id: `${dbUser!.id}`,
          name: dbUser!.name,
          slug: dbUser!.slug,
          brand: dbUser!.brand
        }
      }
    });
  });
});