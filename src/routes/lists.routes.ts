import express from "express"
import {
  addTvShowToList,
  createList,
  getListsByUserId,
  getListsByUserEmail,
  updateListOrder,
} from "../controller/lists.controller"
import { authMiddleware } from "../middleware"
import { validateData } from "../middleware/validation"
import { listSchema } from "../schemas/list.schema"

export function listsRoutes() {
  const router = express.Router()

  router.get("/user/:userId", authMiddleware, getListsByUserId)
  router.get("/user", authMiddleware, getListsByUserEmail)
  router.post("/", authMiddleware, validateData(listSchema), createList)
  router.post("/:listId/tvShow/:tvShowId", authMiddleware, addTvShowToList)
  router.patch("/:listId", authMiddleware, updateListOrder)

  return router
}
