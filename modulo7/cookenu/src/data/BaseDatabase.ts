import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export class BaseDatabase {
  protected static connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST2,
      user: process.env.DB_USER2,
      password: process.env.DB_PASSWORD2,
      database: process.env.DB_SCHEMA2,
      port: 3306,
      multipleStatements: true,
    },
  });
}
