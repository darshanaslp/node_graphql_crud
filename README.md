# NodeJS GraphQL Backend Tutorial

## Overview

Build a basic CRUD backend application in NodeJS with GraphQL & MySQL.

## Technologies

[NodeJS](https://nodejs.org/)
[TypeScript](https://www.typescriptlang.org/)
[ExressJs](https://nestjs.com/)
[TypeGraphQL](https://typegraphql.com/)
[TypeORM](https://typeorm.io/)
[MySQL](https://www.mysql.com/)

## Create an Empty Project

Git Clond or Download an Zip Repository Than Unzip and go Inside the Floder

open Nodejs Console and Run "Npm i" to install neccesay Packeges

```bash
npm install i

```

Then to statr project you need to run these command in node console

Start the server in watch mode.

```bash
npm run start:dev
```


### Install and Config

Dataase Congif Yon need to give you Mysql Database Conig In side index.ts and you relevent database

const main = async () => {
    await createConnection({
        type: "mysql",
        database: "",
        username: "",
        password: "",
        logging: true,
        synchronize: false,
        entities: [],
    });


### Create the User Entity and Input Type

Create the following file `src/Entities/product.entity.ts`.

```ts
@PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @MaxLength(30)
    name!: string;

    @Column()
    @IsOptional()
    @Length(30, 255)
    slug!: string;

    @Column()
    @IsOptional()
    @Length(30, 255)
    brand!: string;

```

```

### Test the GraphQL Endpoint

Start the server instance in watch mode.

```bash
npm run start:dev
```

Goto the GraphQL - http://localhost:4000/graphql.

1. Create a new user

   ```graphql
   mutation {
     createProduct(input: { name: "Food" }) {
       id
     }
   }
   ```

   Output :

   ```json
   {
     "data": {
       "createProduct": {
         "id": "95678594"
       }
     }
   }
   ```

2. Query the products

   ```graphql
   query {
     users {
       id
       name
     }
   }
   ```

   Output :

   ```json
   {
     "data": {
       "products": [
         {
           "id": "95678594",
           "name": "Food"
         }
       ]
     }
   }
   ```

### Test the GraphQL Endpoint with TypeORM

Start a MySQL docker instance.

Start the server instance in watch mode.

```bash
npm run start:dev
```

Goto the GraphQL Playground - http://localhost:4000/graphql.

1. Create some users

   ```graphql
   mutation {
     createProduct(input: { name: "Food" }) {
       id
     }
    createProduct(input: { name: "Drink" }) {
       id
     }
   }
   ```

   Output:

   ```json
   {
     "data": {
       "a": {
         "id": "6ad2b68d-15a8-4e3e-9062-6343324faa7e"
       },
       "b": {
         "id": "eb777cfa-65d4-4a36-9344-5452284647e6"
       }
     }
   }
   ```

2. Query the product

   ```graphql
   query {
     products {
       id
       name
     }
   }
   ```

   Output :

   ```json
   {
     "data": {
       "products": [
         {
           "id": "6ad2b68d-15a8-4e3e-9062-6343324faa7e",
           "name": "Food"
         },
         {
           "id": "eb777cfa-65d4-4a36-9344-5452284647e6",
           "name": "Drink"
         }
       ]
     }
   }
   ```

3. Update one of the product by the id

   ```graphql
   mutation {
     updateProduct(name: "Food",slug:"name1",brand:"International")
   }
   ```

   Output :

   ```json
   {
     "data": {
       "updateProduct": "6ad2b68d-15a8-4e3e-9062-6343324faa7e"
     }
   }
   ```

4. Delete one of the product by the id

   ```graphql
   mutation {
     deleteProduct(id: "6ad2b68d-15a8-4e3e-9062-6343324faa7e")
   }
   ```

   Output :

   ```json
   {
     "data": {
       "deleteProduct": "6ad2b68d-15a8-4e3e-9062-6343324faa7e"
     }
   }
   ```



