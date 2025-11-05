import express from "express"

import {
  createRating,
  createRatingScale,
  getRatingById,
  getRatingsByUserId,
  getRatingScales,
} from "../controller/ratings.controller"
import { authMiddleware } from "../middleware"
import { validateData } from "../middleware/validation"
import { ratingSchema } from "../schemas/rating.schema"

export function ratingsRoutes() {
  const router = express.Router()

  router.get("/user/:userId", authMiddleware, getRatingsByUserId)
  router.get("/scale", authMiddleware, getRatingScales)
  router.post("/", authMiddleware, validateData(ratingSchema), createRating)
  router.post("/scale", authMiddleware, createRatingScale)
  router.get("/:ratingId", authMiddleware, getRatingById)

  return router
}
