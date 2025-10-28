import express from "express"
import { getAllTvShows } from "../controller/tvShows.controller"
import { authMiddleware } from "../middleware"

export function tvShowsRoutes() {
  const router = express.Router()

  router.get("/", authMiddleware, getAllTvShows)

  return router
}
