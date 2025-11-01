import express from "express"

import {
  createUser,
  getUserByEmail,
  getUserById,
  updateUser,
} from "../controller/user.controller"
import { authMiddleware } from "../middleware"
import { validateData } from "../middleware/validation"
import { userSchema } from "../schemas/user.schema"

export function userRoutes() {
  const router = express.Router()

  router.get("/:userId", authMiddleware, getUserById)
  router.get("/", authMiddleware, getUserByEmail)
  router.post("/", validateData(userSchema), createUser)
  router.patch("/", authMiddleware, updateUser)
  router.delete("/:userId", authMiddleware, getUserById)

  return router
}
