import { StatusCodes } from "http-status-codes";
import { boardValidation } from "~/validations/boardValidation";
const router = require("express").Router();

router
  .route("/")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: "Get all boards" });
  })
  .post(boardValidation.createNew);

export const boardRoute = router;
