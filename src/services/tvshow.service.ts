import tvShowRepository from "../repository/tvshow.repository"
import { Tvshows } from "../types"
import { AppError } from "../utils/errors"

async function getAllTvShows() {
  try {
    return await tvShowRepository.getAllTvShows()
  } catch (error) {
    console.error("Error fetching TV shows:", error)
    throw new Error("Could not fetch TV shows!")
  }
}

async function createTvShow(params: Tvshows) {
  return await tvShowRepository.createTvShow(params)
}

const tvshowsServices = {
  createTvShow,
  getAllTvShows,
}

export default tvshowsServices
