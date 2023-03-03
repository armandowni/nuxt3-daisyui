import "reflect-metadata";
import { router } from "../server-middleware/routerExpress";
import { AppDataSource } from "./datasource-db";

async function serverdb() {
    await AppDataSource.initialize()
      .then((conn) => {
        console.log(`load orm connection`);
      })
      .catch((err) =>
        console.error("Error during Data Source initialization:", err)
      );
  
    return router;
  }
  
  export default serverdb;