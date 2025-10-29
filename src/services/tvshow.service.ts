import { prisma } from "../app"

async function getAllTvShows() {
  try {
    const allTvShows = await prisma.tvShows.findMany({
      include: {
        tvshowGenres: {
          include: {
            genre: true,
          },
        },
      },
    })

    return allTvShows.map((tvShow) => {
      const { tvshowGenres, ...rest } = tvShow
      return {
        ...rest,
        genres: tvShow.tvshowGenres.map((genre) => genre.genre),
      }
    })
  } catch (error) {
    console.error("Error fetching TV shows:", error)
    throw new Error("Could not fetch TV shows!")
  }
}

const tvshowsServices = {
  getAllTvShows,
}

export default tvshowsServices
