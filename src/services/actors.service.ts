import { prisma } from "../app"

async function getAllActors() {
  return await prisma.actors.findMany()
}

const actorsService = {
  getAllActors,
}

export { actorsService }
