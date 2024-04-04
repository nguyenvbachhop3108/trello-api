import { StatusCodes } from "http-status-codes";
const router = require("express").Router();
import { boardRoutes } from "./boardRoutes";

router.get("/status", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "APIs V1 is ready to use!" });
});

router.use("/boards", boardRoutes);

export const APIs_V1 = router;
