import { DataSourceOptions } from "typeorm";
import nuxtConfig from "../nuxt.config";
import { entities } from "./source/db";

// const DB = nuxtConfig.env.DB;
export const config: DataSourceOptions = {
  name: "default",
  type: "postgres",
  port: 5432,
  host: "localhost",
  username: "postgres",
  password: "admin123",
  database: "testingdb",
  synchronize: true,
  logging: false,
  entities: entities,
  migrations: ["src/migration/**/*.ts"],
  // extra: !DB.database ? null : DB.extra,
};
