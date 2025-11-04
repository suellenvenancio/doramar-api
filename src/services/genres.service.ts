import genreRepository from "../repository/genres.repository"

async function getAllGenres() {
  return await genreRepository.getAllGenres()
}

const genreServices = {
  getAllGenres,
}

export { genreServices }
