import { NextFunction, Request, Response } from "express"
import tvshowsServices from "../services/tvshow.service"
import { sendResponse } from "../utils/sendResponse"
import { AppError } from "../utils/errors"

export async function getAllTvShows(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const allTvShows = await tvshowsServices.getAllTvShows()
    return sendResponse(res, 200, "TV shows retrieved successfully", allTvShows)
  } catch (error) {
    console.error("Error fetching TV shows:", error)
    return next(new AppError("Internal server error", 500))
  }
}
