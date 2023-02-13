import express, { Request, Response } from "express";
import { TestRepository } from "../database/util/repositories";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const result = await TestRepository.findAndCount();

  res.send(result);
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
