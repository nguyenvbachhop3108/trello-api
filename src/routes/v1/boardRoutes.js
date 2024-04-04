import { StatusCodes } from "http-status-codes";
const router = require("express").Router();

router
  .route("/")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: "Get all boards" });
  })
  .post((req, res) => {
    res.status(StatusCodes.CREATED).json({ message: "Post boards" });
  });

export const boardRoutes = router;
