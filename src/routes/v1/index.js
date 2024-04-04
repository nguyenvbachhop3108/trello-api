import { StatusCodes } from "http-status-codes";
const router = require("express").Router();
import { boardRoute } from "./boardRoute";

router.get("/status", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "APIs V1 is ready to use!" });
});

router.use("/boards", boardRoute);

export const APIs_V1 = router;