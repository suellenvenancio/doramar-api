import { NextFunction, Request, Response } from "express"
import { genreServices } from "../services/genres.service"
import { sendResponse } from "../utils/sendResponse"
import { AppError } from "../utils/errors"

export async function getAllGenres(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const genres = await genreServices.getAllGenres()
    return sendResponse(res, 200, "Genres retrieved successfully", genres)
  } catch (error) {
    return next(new AppError("Internal server error", 500))
  }
}
