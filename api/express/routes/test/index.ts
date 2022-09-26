import { Request, Response } from "express";
import { AppDataSource } from "../../../data-source";
import { Test } from "../../../src/db/entities/Test";

const testRepository = AppDataSource.getRepository(Test);

export async function get(req: Request, res: Response) {
  
  res.send({message:"testing"});
}

// export async function post(req: Request, res: Response) {
//   const data = req.body;

//   if (Object.keys(data).length == 0) throw new Error("data cannot empty");

//   const result = await testRepository.save(data);
//   res.send(result);
// }

