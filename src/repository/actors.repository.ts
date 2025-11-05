import { prisma } from "../lib/prisma"

async function getAllActors() {
  try {
    return await prisma.actors.findMany()
  } catch (error) {
    console.error("Error fetching actors:", error)
    throw new Error("Failed to fetch actors")
  }
}

const actorsRepository = {
  getAllActors,
}

export default actorsRepository
