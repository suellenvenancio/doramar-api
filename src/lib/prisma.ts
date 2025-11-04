import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"
import dotenv from "dotenv"

dotenv.config()

const prismaClientSingleton = () => {
  return new PrismaClient().$extends(withAccelerate())
}

type PrismaClientExtended = ReturnType<typeof prismaClientSingleton>

declare global {
  var prisma: PrismaClientExtended | undefined
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma
}

export { prisma }
