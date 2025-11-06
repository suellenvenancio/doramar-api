import { NextFunction, Request, Response } from "express"
import tvshowsServices from "../services/tvshows.service"
import { sendResponse } from "../utils/sendResponse"
import { AppError } from "../utils/errors"

export async function getAllTvShows(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const allTvShows = await tvshowsServices.getAllTvShows()
    return sendResponse(
      res,
      200,
      "TV shows retrieved successfully!",
      allTvShows
    )
  } catch (error) {
    console.error("Error fetching TV shows:", error)
    return next(sendResponse(res, 500, "Internal Server Error"))
  }
}

export async function createTvShow(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const tvShowData = req.body
    const newTvShow = await tvshowsServices.createTvShow(tvShowData)
    return sendResponse(res, 201, "TV show created successfully!", newTvShow)
  } catch (error: unknown) {
    return next(
      sendResponse(
        res,
        (error as AppError).statusCode || 500,
        (error as AppError).message || "Internal Server Error"
      )
    )
  }
}
