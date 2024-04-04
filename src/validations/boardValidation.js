import { StatusCodes } from "http-status-codes";
import Joi from "joi";

const createNew =async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict(),
    description: Joi.string().required().min(3).max(50).trim().strict(),
  });

  try {
    await correctCondition.validateAsync(req.body, {abortEarly: false})
    res.status(StatusCodes.CREATED).json({ message: "Post board Validation" });
  } catch (error) {
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      errors:new Error(error).message
    })
  }
};

export const boardValidation = { createNew };
