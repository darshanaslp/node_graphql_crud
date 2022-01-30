import * as util from 'util';
import { exec } from 'child_process';

import { graphqlHTTP } from "express-graphql";
import { schema } from "../Schema";



const pExec = util.promisify(exec);

const API = 'http://localhost:3000/';
const CMD_SEED_DATABASE = `${__dirname}/../seed.sh`;

describe('Getting Product items', () => {
  beforeAll(async () => {
    await pExec(CMD_SEED_DATABASE);
  });

  it('Retrieves the Product items in default order', async () => {
    const query = `
        query {
          getAllProducts {
            id
            name
            slug
            brand
          }
        }
        `;

    const response = await rp({ method: 'POST', uri: API, body: { query }, json: true });
    expect(response).toMatchSnapshot();
  });
});

describe('Tests that can be performed on the Todo Mutation', () => {
  it('should not allow an authenticated user create a TODO ', async () => {
    const CREATE_PRODUCT = schema`
      mutation {
        createProduct(name:"food",slug:"item",brand:"local"){
          name
          slug
          brad
        }
      }
      `;
    await expect(graphqlHTTP.mutate({
      mutation: CREATE_PRODUCT
    })).rejects.toThrowError("Authentication required");
  });

  it('should update a TODO', async () => {

    const variables = {
      name: test
    }

    const updateProduct = gql`
    mutation {
      updateProduct(name: "Food",slug:"name1",brand:"International"){
        message
      }
    }
    `;
    const updatedTodo = await graphqlHTTP.muate({
      mutation: updateProduct,variables
    });
    expect(updatedTodo.data.updateTodo.slug).toBe('name1');
    expect(updatedTodo.data.updateTodo.brand).toBe('internation');
  });

  it('should delete a TODO', async () => {
    const variables = {
      id: 1
    }
    const deleteTodo = gql`
    mutation {
      deleteProduct(id: "1"){
        id
      }
    }
    `;
    const deletedTodo = await graphqlHTTP.mutate({
      mutation: deleteTodo, variables
    });
    expect(variables).toBe(false);
  });
});