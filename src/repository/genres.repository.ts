import { prisma } from "../lib/prisma"

async function getAllGenres() {
  try {
    return await prisma.genres.findMany()
  } catch (error) {
    console.error("Error fetching genres:", error)
    throw new Error("Failed to fetch genres")
  }
}

const genreRepository = {
  getAllGenres,
}

export default genreRepository
