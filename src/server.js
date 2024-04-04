import express from "express";
import "dotenv/config";
import { CONNECT_DB, GET_DB, CLOSE_DB } from "~/config/mongodb";
import AsyncExitHook from "async-exit-hook";

const app = express();

const STAR_SERVER = () => {
  app.get("/", async (req, res) => {
    console.log(await GET_DB().listCollections().toArray());
    res.end("<h1>Hello World!</h1><hr>");
  });

  app.listen(process.env.PORT, () => {
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
