import * as express from "express";
import * as cors from "cors";
import server from "./server";
import * as bp from "body-parser";
import { router } from "./routes";

const app = express();
app.use(cors());
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json({ limit: "20mb" }));

server();
app.use("/v1", router);

export default app;
