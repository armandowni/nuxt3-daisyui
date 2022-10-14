import { Router } from "express";
import { testRoute } from "./test";

export const router = Router();
router.use("/test", testRoute);
