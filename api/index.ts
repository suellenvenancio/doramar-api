import { PrismaClient } from "./generated/prisma"

import express from "express"
import cors from "cors"
import helmet from "helmet"
import dotenv from "dotenv"
import { tvShowsRoutes } from "./routes/tvshows"
import { listsRoutes } from "./routes/lists.routes"
import { userRoutes } from "./routes/user.routes "
import morgan from "morgan"
import { ratingsRoutes } from "./routes/ratings.routes"
import { actorsRoutes } from "./routes/actors.routes"
import { genresRoutes } from "./routes/genres.routes"

import { cert, initializeApp, ServiceAccount } from "firebase-admin/app"
import { withAccelerate } from "@prisma/extension-accelerate"

import serviceAccount from "../mykoreandramas-firebase-adminsdk-fbsvc-e60595d3a1.json"

dotenv.config()

const prisma = new PrismaClient().$extends(withAccelerate())
const app = express()

async function main() {
  const PORT = process.env.PORT || 3000

  const corsOptions = {
    origin: [process.env.CLIENT_URL!],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: false,
  }

  initializeApp({
    credential: cert(serviceAccount as ServiceAccount),
  })

  app.use(helmet())
  app.use(cors(corsOptions))
  app.use(express.json())
  app.use(morgan("dev"))
  app.listen(3000, "0.0.0.0", () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
  })

  app.use(`/tvshows`, tvShowsRoutes())
  app.use(`/lists`, listsRoutes())
  app.use(`/users`, userRoutes())
  app.use(`/ratings`, ratingsRoutes())
  app.use(`/actors`, actorsRoutes())
  app.use(`/genres`, genresRoutes())
}

main()
  .catch((err) => {
    console.error("Erro fatal na aplicação:", err)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
