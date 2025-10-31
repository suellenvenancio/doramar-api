import express from "express"
import {
  addTvShowToList,
  createList,
  getListsByUserId,
  getListsByUserEmail,
  updateListOrder,
} from "../controller/lists.controller"
import { authMiddleware } from "../middleware"

export function listsRoutes() {
  const router = express.Router()

  router.get("/user/:userId", authMiddleware, getListsByUserId)
  router.get("/user", authMiddleware, getListsByUserEmail)
  router.post("/", authMiddleware, createList)
  router.post("/:listId/tvShow/:tvShowId", authMiddleware, addTvShowToList)
  router.patch("/:listId", authMiddleware, updateListOrder)

  return router
}
