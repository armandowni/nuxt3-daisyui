import express from "express";
import cors from "cors";
// import server from "./server";
import bp from "body-parser";
import { router } from "../routerExpress";

const app = express();
app.use(cors());
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json({ limit: "20mb" }));

// server();
app.use("/api/v1", router);

export default app;
