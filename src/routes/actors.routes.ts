import express from "express"
import { getAllActors } from "../controller/actors.controller"
import { authMiddleware } from "../middleware"

export function actorsRoutes() {
  const router = express.Router()

  router.get("/", authMiddleware, getAllActors)
  return router
}
