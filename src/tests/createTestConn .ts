import { createConnection } from "typeorm";
import { Products } from "../Entities/Products";

export const createTestConn = async () =>
//test mysql connection
  createConnection({
    type: "mysql",
        database: "GraphqlCrud",
        username: "root",
        password: "",
        logging: true,
        synchronize: true,
        entities: [Products],
  });