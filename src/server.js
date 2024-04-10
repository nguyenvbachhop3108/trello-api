import express from "express";
import cors from "cors";
import "dotenv/config";
import { CONNECT_DB, CLOSE_DB } from "~/config/mongodb";
import AsyncExitHook from "async-exit-hook";
import { APIs_V1 } from "./routes/v1";
import { errorHandler, notFound } from "./middlewares/errHandler";
import { corsOptions } from "./config/cors";

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const STAR_SERVER = () => {
  app.use("/v1", APIs_V1);

  app.use(notFound);
  app.use(errorHandler);
  app.listen(process.env.APP_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on PORT: ${process.env.APP_PORT}`);
  });

  AsyncExitHook(() => {
    CLOSE_DB();
  });
};

CONNECT_DB()
  .then(console.log("Connect to MongoDb Atlas successed"))
  .then(STAR_SERVER())
  .catch((err) => console.log(err));
