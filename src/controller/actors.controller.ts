import { NextFunction, Request, Response } from "express"
import { actorsService } from "../services/actors.service"
import { sendResponse } from "../utils/sendResponse"
import { AppError } from "../utils/errors"

export async function getAllActors(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const actors = await actorsService.getAllActors()
    return sendResponse(res, 200, "Actors retrieved successfully", actors)
  } catch (error) {
    return next(sendResponse(res, 500, "Error fetching actors!"))
  }
}
