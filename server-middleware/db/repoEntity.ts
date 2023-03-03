import { AppDataSource } from "../../server-middleware/datasource-db";
import { Test } from "./entities/Test";

export const TestRepository = AppDataSource.getRepository(Test);

