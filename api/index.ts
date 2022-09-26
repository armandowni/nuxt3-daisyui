import express from "express";
import cors from "cors";
import server from "./server";
import { json, urlencoded } from "body-parser";

const app = express();
app.use(cors());
// app.use(urlencoded({ extended: false }));
// app.use(json());

const serve = server();

app.use("/v1", (req, res) => {
  serve
    .then((s) => {
      const { apiRouter } = s.httpRoutes();

      apiRouter(req, res, () => {});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("oops... internal server error");
    });
});

export default app;
