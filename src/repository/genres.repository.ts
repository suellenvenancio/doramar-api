import { prisma } from "../lib/prisma"

async function getAllGenres() {
  return await prisma.genres.findMany()
}

const genreRepository = {
  getAllGenres,
}

export default genreRepository
