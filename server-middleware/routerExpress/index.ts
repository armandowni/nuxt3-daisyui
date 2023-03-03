import { Router } from "express";
import { testRoute } from "./test";

export const router = Router({mergeParams:true});
router.use("/test", testRoute);
