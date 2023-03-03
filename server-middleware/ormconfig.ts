import { DataSourceOptions } from "typeorm";
import { entities } from "./db/index";

export const config: DataSourceOptions = {
  name: "default",
  type: "postgres",
  port: 5432,
  host: "localhost",
  username: "postgres",
  password: "admin123",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: entities,
  migrations: ["./util/migration/*.js"],
};
