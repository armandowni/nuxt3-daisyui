import { DataSourceOptions } from "typeorm";
import { entities } from "./util/index";

export const config: DataSourceOptions = {
  name: "default",
  type: "postgres",
  port: 5431,
  host: "localhost",
  username: "postgres",
  password: "admin123",
  database: "testingdb",
  synchronize: true,
  logging: false,
  entities: entities,
  migrations: ["./util/migration/*.js"],
};
