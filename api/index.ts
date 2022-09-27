import express from "express";
import cors from "cors";
import server from "./server";
import Test from "./express/routes/test/index";
import bp from "body-parser";

const app = express();
app.use(cors());
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use("/test", Test);

const serve = server();

// app.use("/v1", (req, res) => {
//   // console.log(__dirname);
//   // res.send("testing")

//   serve
//     .then((s) => {
//       const { apiRouter } = s.httpRoutes();

//       apiRouter(req, res, () => {});
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send("oops... internal server error");
//     });
// });

export default app;
