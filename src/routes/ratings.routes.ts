import express from "express"

import {
  createRating,
  getRatingsByTvShowId,
  getRatingsByUserId,
  getRatingScales,
  updateRating,
} from "../controller/ratings.controller"
import { authMiddleware } from "../middleware"

export function ratingsRoutes() {
  const router = express.Router()

  router.get("/user/:userId", authMiddleware, getRatingsByUserId)
  router.get("/tvShow/:tvShowId", authMiddleware, getRatingsByTvShowId)
  router.get("/scale", authMiddleware, getRatingScales)
  router.post("/:scaleId/user/:userId/tvShow/:tvShowId", createRating)
  router.patch("/:ratingId", updateRating)

  return router
}
