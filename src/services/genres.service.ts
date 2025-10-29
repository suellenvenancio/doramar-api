import { prisma } from "../app"

async function getAllGenres() {
  return await prisma.genres.findMany()
}

const genreServices = {
  getAllGenres,
}

export { genreServices }
