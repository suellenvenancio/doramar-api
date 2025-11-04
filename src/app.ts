import morgan from "morgan"
import express, { Request, Response, NextFunction } from "express"
import cors from "cors"
import helmet from "helmet"
import dotenv from "dotenv"

dotenv.config()

import { initializeFirebase } from "./lib/firebase"

import { tvShowsRoutes } from "./routes/tvshows"
import { listsRoutes } from "./routes/lists.routes"
import { userRoutes } from "./routes/user.routes "
import { ratingsRoutes } from "./routes/ratings.routes"
import { actorsRoutes } from "./routes/actors.routes"
import { genresRoutes } from "./routes/genres.routes"

initializeFirebase()
const app = express()
const allowedOrigins = [process.env.CLIENT_URL_PROD, process.env.CLIENT_URL_DEV]

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin && process.env.NODE_ENV !== "production") {
      return callback(null, true)
    }
    if (origin && allowedOrigins.includes(origin)) {
      return callback(null, true)
    }
    return callback(new Error("Not allowed by CORS"))
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: false,
}

app.use(helmet())
app.use(cors(corsOptions))
app.use(express.json())

app.use(morgan(process.env.NODE_ENV === "production" ? "common" : "dev"))

app.use(`/tvshows`, tvShowsRoutes())
app.use(`/lists`, listsRoutes())
app.use(`/users`, userRoutes())
app.use(`/ratings`, ratingsRoutes())
app.use(`/actors`, actorsRoutes())
app.use(`/genres`, genresRoutes())

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)

  res.status(500).json({
    message: "Algo deu errado no servidor.",
    error: process.env.NODE_ENV === "production" ? undefined : err.message,
  })
})

export default app
