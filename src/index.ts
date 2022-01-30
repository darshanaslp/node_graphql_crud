import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";

import {schema} from "./Schema";
import {Products} from "./Entities/Products"

const main = async () => {
    await createConnection({
        type: "mysql",
        database: "GraphqlCrud",
        username: "root",
        password: "",
        logging: true,
        synchronize: false,
        entities: [Products],
    });

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql",graphqlHTTP({
        schema,
        graphiql:true
    }))

    app.listen(3000, () => {
        console.log("Server Runinng on Port 3000");
    });

}

main().catch((err) => {
    console.log(err);
});