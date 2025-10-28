import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors"
import { sendResponse } from "../utils/sendResponse"

import user from "../repository/user"

import dotenv from "dotenv"
import { RegisterUserInput } from "../types"
import userService from "../services/user.service"

dotenv.config()

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
  } catch (error) {
    console.error("Error registering user:", error)
    return next(new AppError("Error registering user", 500))
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
    return next(new AppError("Error getting user", 500))
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
    return next(new AppError("Error getting user", 500))
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
    return next(new AppError("Error getting user", 500))
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
    return next(new AppError("Error deleting user", 500))
  }
}
