import express, { Request, Response } from "express";
import { AppDataSource } from "../../../data-source";
import { Test } from "../../../src/db/entities/Test";

// const testRepository = AppDataSource.getRepository(Test);

export async function get(req: Request, res: Response) {
  res.send({ message: "testing" });
}
// const router = express.Router();

// router.get("/", async (req: Request, res: Response) => {
//   const result = await testRepository.findAndCount();
//   // console.log(result[0]);

//   res.send(result);
// });

// export default { get };
