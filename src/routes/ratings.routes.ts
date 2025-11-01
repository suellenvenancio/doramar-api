import express from "express"

import {
  createRating,
  getRatingsByTvShowId,
  getRatingsByUserId,
  getRatingScales,
  updateRating,
} from "../controller/ratings.controller"
import { authMiddleware } from "../middleware"
import { validateData } from "../middleware/validation"
import { ratingSchema } from "../schemas/rating.schema"

export function ratingsRoutes() {
  const router = express.Router()

  router.get("/user/:userId", authMiddleware, getRatingsByUserId)
  router.get("/tvShow/:tvShowId", authMiddleware, getRatingsByTvShowId)
  router.get("/scale", authMiddleware, getRatingScales)
  router.post("/", authMiddleware, validateData(ratingSchema), createRating)
  router.patch("/:ratingId", authMiddleware, updateRating)

  return router
}
