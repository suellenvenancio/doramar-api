import { NextFunction, Request, Response } from "express"
import { sendResponse } from "../utils/sendResponse"
import userService from "../services/user.service"

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

    const { password, ...user } = newUser

    return sendResponse(res, 201, "User registered successfully", {
      ...user,
    })
  } catch (error: Error | any) {
    console.error("Error registering user:", error)

    return next(
      sendResponse(res, 500, error.message || "Error registering user")
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
  } catch (error) {
    return next(sendResponse(res, 500, "Error getting user by id"))
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
  } catch (error) {
    return next(sendResponse(res, 500, "Error getting user by email"))
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
  } catch (e) {
    return next(sendResponse(res, 500, "Error updating user"))
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
    return sendResponse(res, 200, "User deleted successfully", user)
  } catch (error) {
    return next(sendResponse(res, 500, "Error deleting user"))
  }
}
