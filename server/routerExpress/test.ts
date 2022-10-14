import express, { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Test } from "../src/db/entities/Test";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const testRepository = AppDataSource.getRepository(Test);
  // const result = await testRepository.findAndCount();

  res.send([[],0]);
});

router.post("/", async (req: Request, res: Response) => {
  const data = req.body;

  if (Object.keys(data).length == 0) throw new Error("data cannot empty");

  // const result = await testRepository.save(data);
  res.send({ message: "Success add data" });
});

router.put("/:id", async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.params.id;

  if (Object.keys(data).length == 0) throw new Error("data cannot empty");

  // await testRepository.update(id, data);

  res.send({ message: "Success update data" });
});

router.delete("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  // const data = await testRepository.findOne({ where: { id: id } });

  // if (!data) throw new Error("404 data not found");
  // await testRepository.softDelete(data.id);

  res.send({ message: "success delete data" });
});

export const testRoute = router;
