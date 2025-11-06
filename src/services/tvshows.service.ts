import tvShowRepository from "../repository/tvshow.repository"
import { Tvshows } from "../types"

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

const tvshowsService = {
  createTvShow,
  getAllTvShows,
}

export default tvshowsService
