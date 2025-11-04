import express from "express"

import {
  createUser,
  deleteUserById,
  getUserByEmail,
  getUserById,
  updateUser,
} from "../controller/user.controller"
import { authMiddleware } from "../middleware"
import { validateData } from "../middleware/validation"
import { userSchema } from "../schemas/user.schema"

export function userRoutes() {
  const router = express.Router()

  router.get("/:userId", getUserById)
  router.get("/", getUserByEmail)
  router.post("/", validateData(userSchema), createUser)
  router.patch("/:userId", updateUser)
  router.delete("/:userId", deleteUserById)

  return router
}
