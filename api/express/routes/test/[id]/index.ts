import { Request, Response } from "express";
import { AppDataSource } from "../../../../data-source";
import { Test } from "../../../../src/db/entities/Test";

const testRepository = AppDataSource.getRepository(Test);

export async function put(req: Request, res: Response) {
  const data = req.body;
  const id = req.params.id;

  if (Object.keys(data).length == 0) throw new Error("data cannot empty");

  await testRepository.update(id, data);

  res.send({ message: "Success update data" });
}
export async function del(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  let data = await testRepository.findOne({ where: { id: id } });

  if (!data) throw new Error("404 data not found");
  await testRepository.softDelete(data.id);

  res.send({ message: "success delete data" });
}
