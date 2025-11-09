import { NextFunction, Request, Response } from "express"
import { sendResponse } from "../utils/sendResponse"
import userService from "../services/user.service"
import { AppError } from "../utils/errors"

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userData = req.body
  try {
    const newUser = await userService.createUser({
      ...userData,
    })

    return sendResponse(res, 201, "User registered successfully", {
      ...newUser,
    })
  } catch (error: Error | any) {
    console.error("Error registering user:", error)

    return next(
      sendResponse(
        res,
        (error as AppError).statusCode || 500,
        (error as AppError).message || "Error registering user"
      )
    )
  }
}

export async function getUserById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { userId } = req.params
    const user = await userService.getUserById(userId)
    return sendResponse(res, 200, "User returned successfully", user)
  } catch (error: unknown) {
    return next(
      sendResponse(
        res,
        (error as AppError).statusCode || 500,
        (error as AppError).message || "Error getting user by ID"
      )
    )
  }
}

export async function getUserByEmail(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { email } = req.query

    const user = await userService.getUserByEmail(String(email))

    return sendResponse(res, 200, "User returned successfully", user)
  } catch (error: unknown) {
    return next(
      sendResponse(
        res,
        (error as AppError).statusCode || 500,
        (error as AppError).message || "Error getting user by email"
      )
    )
  }
}

export async function updateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { userId } = req.params
    const user = req.body
    const updatedUser = await userService.updateUser(userId, user)
    return sendResponse(res, 200, "User Successfully updated!", updatedUser)
  } catch (e: unknown) {
    return next(
      sendResponse(
        res,
        (e as AppError).statusCode || 500,
        (e as AppError).message || "Error updating user"
      )
    )
  }
}

export async function deleteUserById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { userId } = req.params
    const user = await userService.deleteUser(userId)
    return sendResponse(res, 200, "User deleted successfully!", user)
  } catch (error: unknown) {
    return next(
      sendResponse(
        res,
        (error as AppError).statusCode || 500,
        (error as AppError).message || "Error deleting user!"
      )
    )
  }
}
