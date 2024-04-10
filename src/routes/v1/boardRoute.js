import { StatusCodes } from "http-status-codes";
import { boardValidation } from "~/validations/boardValidation";
import { boardController } from "~/controllers/boardController";
const router = require("express").Router();

router
  .route("/")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: "Get all boards" });
  })
  .post(boardValidation.createNew, boardController.createNew);

router.route("/:bId").get(boardController.getDetails);

export const boardRoute = router;
