import express from "express"
import { createTvShow, getAllTvShows } from "../controller/tvShows.controller"
import { authMiddleware } from "../middleware"

export function tvShowsRoutes() {
  const router = express.Router()

  router.get("/", authMiddleware, getAllTvShows)
  router.post("/", authMiddleware, createTvShow)
  return router
}
