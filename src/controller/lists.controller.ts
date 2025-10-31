import { NextFunction, Request, Response } from "express"
import { sendResponse } from "../utils/sendResponse"
import { AppError } from "../utils/errors"
import listsServices from "../services/list.service"

export async function getListsByUserId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { userId } = req.params
    const allLists = await listsServices.getAllListsByUserId(userId)
    return sendResponse(res, 200, "Lists retrieved successfully", allLists)
  } catch (error) {
    console.error("Error fetching Lists:", error)
    return next(new AppError("Internal server error", 500))
  }
}

export async function getListsByUserEmail(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { email } = req.query
    const allTvShows = await listsServices.getAllListsByUserEmail(String(email))
    return sendResponse(res, 200, "Lists retrieved successfully", allTvShows)
  } catch (error) {
    console.error("Error fetching Lists:", error)
    return next(new AppError("Internal server error", 500))
  }
}

export async function createList(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const listData = req.body
    const newList = await listsServices.createList(listData)
    return sendResponse(res, 200, "List create Successfully!", newList)
  } catch (e) {
    return next(new AppError("Internal server error", 500))
  }
}

export async function addTvShowToList(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { listId, tvShowId } = req.params
    const { userId } = req.body

    await listsServices.addTvShowToList({ listId, tvShowId, userId })
    const list = await listsServices.findListById(listId)

    return sendResponse(
      res,
      200,
      "TV Show Successfully added to the list",
      list
    )
  } catch (error) {
    return next(new AppError("Internal server error", 500))
  }
}

export async function updateListOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { order, tvShowId, userId } = req.body
    const { listId } = req.params

    const updatedList = await listsServices.updateListOrder({
      listId,
      newOrder: order,
      tvShowId,
      userId,
    })
    return sendResponse(
      res,
      201,
      "List order updated successfully",
      updatedList
    )
  } catch (error) {
    console.error("Error updating list order:", error)
    return next(new AppError("Internal server error", 500))
  }
}
