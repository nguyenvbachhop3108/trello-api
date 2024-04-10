import { StatusCodes } from "http-status-codes";
import { boardService } from "../services/boardService";

const createNew = async (req, res) => {
  const createBoard = await boardService.createNew(req.body);
  res.status(StatusCodes.CREATED).json(createBoard);
};

const getDetails = async (req, res) => {
  const { bId } = req.params;
  const getBoard = await boardService.getDetails(bId);
  res.status(StatusCodes.OK).json(getBoard);
};

export const boardController = {
  createNew,
  getDetails,
};
