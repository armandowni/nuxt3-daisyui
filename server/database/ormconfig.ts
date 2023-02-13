import { DataSourceOptions } from "typeorm";
import { entities } from "./util/index";

export const config: DataSourceOptions = {
  name: "default",
  type: "postgres",
  port: 5431,
  host: "localhost",
  username: "postgres",
  password: "password",
  database: "nuxt3Typeorm",
  synchronize: false,
  logging: false,
  entities: entities,
  migrations: ["./server/database/util/migration/*.js"],
};
