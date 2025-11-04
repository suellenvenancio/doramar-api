import tvShowRepository from "../repository/tvshow.repository"

async function getAllTvShows() {
  try {
    return await tvShowRepository.getAllTvShows()
  } catch (error) {
    console.error("Error fetching TV shows:", error)
    throw new Error("Could not fetch TV shows!")
  }
}

const tvshowsServices = {
  getAllTvShows,
}

export default tvshowsServices
