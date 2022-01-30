# NodeJS GraphQL Backend Tutorial

## Overview

Build a basic CRUD backend application in NodeJS with GraphQL & MySQL.

## Technologies

[NodeJS](https://nodejs.org/)
[TypeScript](https://www.typescriptlang.org/)
[ExressJs](https://expressjs.com/)
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
        entities: [Product],
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

Goto the GraphQL - http://localhost:3000/graphql.

1. Create a new user

   ```graphql
   mutation {
     createProduct(name:"food",slug:"item",brand:"local"){
       name
       slug
       brad
     }
   }
   ```

   Output :

   ```json
   {
     "data": {
       "createProduct": {
         "name": "food",
          "slug": "item",
          "brand": "local"
       }
     }
   }
   ```

2. Query the products

   ```graphql
   query {
     getAllProducts {
       id
       name
       slug
       brand
     }
   }
   ```

   Output :

   ```json
   {
     "data": {
       "products": [
         {
           "id": "1",
           "name": "Food",
           "slug": "Food Item",
           "brand": "local",
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

Goto the GraphQL  - http://localhost:3000/graphql.

 Query the product

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

 Update one of the product by the name

   ```graphql
   mutation {
     updateProduct(name: "Food",slug:"name1",brand:"International"){
       message
     }
   }
   ```

   Output :

   ```json
    {
    "data": {
      "updateProduct": {
        "message": "Product Update"
      }
    }
  }
   ```

 Delete one of the product by the id

   ```graphql
   mutation {
     deleteProduct(id: "1"){
       id
     }
   }
   ```

   Output :

   ```json
      {
      "data": {
        "deleteProduct": {
          "message": "Product Deleted "
        }
      }
    }
   ```



