import { DataSource } from "typeorm";
import { env } from "@/env";
import { Product } from "@/entities/product.entity";
import { Category } from "@/entities/category.entity";
import { ProductAutoGenerateUUID1719453758499 } from "./migrations/1719453758499-ProductAutoGenerateUUID";

export const appDataSource = new DataSource({
  type: "postgres",
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [Product, Category], //'src/entities/*.ts'
  migrations: [ProductAutoGenerateUUID1719453758499],
  logging: env.NODE_ENV === "development",
});

appDataSource
  .initialize()
  .then(() => {
    console.log("Database with typeorm connected");
  })
  .catch((error) => {
    console.error("Error connecting to database with typeorm", error);
  });
