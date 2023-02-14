import { AppDataSource } from "../datasource-db";
import { Test } from "../util/entities/test";

export const TestRepository = AppDataSource.getRepository(Test);

