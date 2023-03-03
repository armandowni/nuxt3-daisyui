import express, { Request, Response } from "express";
import { TestRepository } from "../db/repoEntity";

const router = express.Router();
// const result = {name:"test"}
router.get("/", async (req: Request, res: Response) => {
  const result = await TestRepository.findAndCount();

  res.send(result);
});

router.post("/", async (req: Request, res: Response) => {
  const data = req.body;
  data.status |= 2;
  if (Object.keys(data).length == 0) throw new Error("data cannot empty");

  const result = await TestRepository.save(data);
  res.send(result);
});

router.put("/:id", async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.params.id;

  if (Object.keys(data).length == 0) throw new Error("data cannot empty");

  await TestRepository.update(id, data);

  res.send({ message: "Success update data" });
});

router.delete("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const data = await TestRepository.findOne({ where: { id: id } });

  if (!data) throw new Error("404 data not found");
  await TestRepository.softDelete(data.id);

  res.send({ message: "success delete data" });
});

export const testRoute = router;
