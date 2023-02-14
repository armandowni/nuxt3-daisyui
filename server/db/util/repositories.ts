import { AppDataSource } from "../datasource-db";
// import { Test } from "./entities/test";

export const TestRepository = AppDataSource.getRepository(null);

