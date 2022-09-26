import "reflect-metadata";
import * as router from "./express/index";
import { AppDataSource } from "./data-source";

async function server() {
  await AppDataSource.initialize()
    .then((conn) => {
      console.log(`load orm connection`);
    })
    .catch((err) =>
      console.error("Error during Data Source initialization:", err)
    );

  return router;
}

export default server;
