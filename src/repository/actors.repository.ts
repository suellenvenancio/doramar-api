import { prisma } from "../lib/prisma"

async function getAllActors() {
  return await prisma.actors.findMany()
}

const actorsRepository = {
  getAllActors,
}

export default actorsRepository
