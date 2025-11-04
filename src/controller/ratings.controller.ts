import { NextFunction, Request, Response } from "express"
import ratingsServices from "../services/ratings.service"
import { sendResponse } from "../utils/sendResponse"

export async function createRating(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { userId, tvShowId, scaleId } = req.body

    const newRating = await ratingsServices.createRating({
      userId,
      tvShowId,
      scaleId,
    })
    res.status(201).json(newRating)
  } catch (error) {
    next(error)
  }
}

export async function getRatingsByUserId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { userId } = req.params

    const ratings = await ratingsServices.getRatingsByUserId(userId)
    return sendResponse(res, 200, "Ratings fetched successfully", ratings)
  } catch (error) {
    next(sendResponse(res, 500, "Error fetching ratings by user id"))
  }
}

export async function updateRating(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { ratingId } = req.params
    const { scaleId, userId } = req.body

    const updatedRating = await ratingsServices.updateRating({
      ratingId,
      scaleId,
      userId,
    })
    return sendResponse(res, 200, "Rating updated successfully", updatedRating)
  } catch (error) {
    next(sendResponse(res, 500, "Error updating rating!"))
  }
}

export async function getRatingScales(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const scales = await ratingsServices.getRatingScales()
    return sendResponse(res, 200, "Rating scales fetched successfully", scales)
  } catch (error) {
    next(sendResponse(res, 500, "Error fetching rating scales!"))
  }
}
