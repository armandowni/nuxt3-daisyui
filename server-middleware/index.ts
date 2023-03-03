import { defineEventHandler } from "h3"
import express from "express";
import cors from "cors";
import bp from "body-parser";
import { router } from "./routerExpress";
import serverdb from "./serverdb";

const app = express();
app.use(cors());
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json({ limit: "20mb" }));


const serverDB = serverdb()
app.use("/v1", (req, res) => {
    serverDB.then((s) => {
        const router = s;

        router(req, res, () => { })
    }).catch((err) => {
        console.log(err);
        res.status(500).send("oops... internal server error");
    });
});

export default app