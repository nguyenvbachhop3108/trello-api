import { boardModel } from "~/models/boardModel";
import { slugify } from "~/utils/formatter";

const createNew = async (reqBody) => {
  const newBoard = { ...reqBody, slug: slugify(reqBody.title) };

  const createBoard = await boardModel.createNew(newBoard);

  const result = await boardModel.findBoardById(createBoard.insertedId);

  return result;
};

const getDetails = async (bId) => {
  const result = await boardModel.getDetails(bId);

  if (!result) throw new Error("Board not found");

  return result;
};

export const boardService = {
  createNew,
  getDetails,
};
