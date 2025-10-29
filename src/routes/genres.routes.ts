import express from "express"
import { getAllGenres } from "../controller/genres.controller"
import { authMiddleware } from "../middleware"

export function genresRoutes() {
  const router = express.Router()

  router.get("/", authMiddleware, getAllGenres)
  return router
}
