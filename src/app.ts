import morgan from "morgan"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import dotenv from "dotenv"

import { PrismaClient } from "@prisma/client"
import { tvShowsRoutes } from "./routes/tvshows"
import { listsRoutes } from "./routes/lists.routes"
import { userRoutes } from "./routes/user.routes "
import { ratingsRoutes } from "./routes/ratings.routes"
import { actorsRoutes } from "./routes/actors.routes"
import { genresRoutes } from "./routes/genres.routes"

import {
  cert,
  initializeApp,
  ServiceAccount,
  getApps,
} from "firebase-admin/app"
import { withAccelerate } from "@prisma/extension-accelerate"

dotenv.config()

if (!getApps().length) {
  const serviceAccountEnv = process.env.FIREBASE_SERVICE_ACCOUNT
  if (!serviceAccountEnv) {
    console.error("Variável de ambiente FIREBASE_SERVICE_ACCOUNT não definida.")
  } else {
    try {
      const serviceAccountJson = Buffer.from(
        serviceAccountEnv,
        "base64"
      ).toString("ascii")

      const serviceAccount = JSON.parse(serviceAccountJson) as ServiceAccount

      initializeApp({
        credential: cert(serviceAccount),
      })
      console.log("Firebase Admin inicializado com sucesso.")
    } catch (e: any) {
      console.error("Erro ao inicializar Firebase Admin:", e.message)
    }
  }
}

export const prisma = new PrismaClient().$extends(withAccelerate())
const app = express()

const corsOptions = {
  origin: [process.env.CLIENT_URL!],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: false,
}

app.use(helmet())
app.use(cors(corsOptions))
app.use(express.json())
app.use(morgan("dev"))

app.use(`/tvshows`, tvShowsRoutes())
app.use(`/lists`, listsRoutes())
app.use(`/users`, userRoutes())
app.use(`/ratings`, ratingsRoutes())
app.use(`/actors`, actorsRoutes())
app.use(`/genres`, genresRoutes())

export default app
