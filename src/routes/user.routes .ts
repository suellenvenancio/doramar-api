import express from "express"

import {
  createUser,
  getUserByEmail,
  getUserById,
  updateUser,
} from "../controller/user.controller"

export function userRoutes() {
  const router = express.Router()

  router.get("/:userId", getUserById)
  router.get("/", getUserByEmail)
  router.post("/", createUser)
  router.patch("/", updateUser)
  router.delete("/:userId", getUserById)

  return router
}
