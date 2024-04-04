import express from "express";
import "dotenv/config";
import { CONNECT_DB, GET_DB, CLOSE_DB } from "~/config/mongodb";
import AsyncExitHook from "async-exit-hook";
import { APIs_V1 } from "./routes/v1";

const app = express();
app.use(express.json())

const STAR_SERVER = () => {
  app.use("/v1", APIs_V1);

  app.listen(process.env.APP_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on PORT: ${process.env.APP_PORT}`);
  });

  AsyncExitHook(() => {
    console.log("APP CLOSED");
    CLOSE_DB();
  });
};

CONNECT_DB()
  .then(console.log("Connect to MongoDb Atlas successed"))
  .then(STAR_SERVER())
  .catch((err) => console.log(err));
