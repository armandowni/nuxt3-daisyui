import { DataSourceOptions } from "typeorm";
import { entities } from "./db/index";

export const config: DataSourceOptions = {
  name: "default",
  type: "postgres",
  port: 5432,
  host: "ep-red-haze-407643-pooler.ap-southeast-1.aws.neon.tech",
  username: "armandowni",
  password: "Yd3V0reLyQDx",
  database: "personal",
  synchronize: true,
  logging: false,
  entities: entities,
  migrations: ["./util/migration/*.js"],
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
