import { ca } from "zod/v4/locales"
import { prisma } from "../lib/prisma"
import { Tvshows } from "../types"

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

async function findTvShowById(tvShowId: string) {
  try {
    return await prisma.tvShows.findUnique({
      where: { id: tvShowId },
    })
  } catch (error) {
    console.error("Error finding TV show by id:", error)
    throw new Error("Could not find TV show!")
  }
}

async function createTvShow(tvShowData: Tvshows) {
  try {
    return await prisma.tvShows.create({
      data: tvShowData,
    })
  } catch (error) {
    console.error("Error creating TV show:", error)
    throw new Error("Could not create TV show!")
  }
}

async function updateTvShow(tvShowId: string, tvShowData: Tvshows) {
  try {
    return await prisma.tvShows.update({
      where: { id: tvShowId },
      data: tvShowData,
    })
  } catch (error) {
    console.error("Error updating TV show:", error)
    throw new Error("Could not update TV show!")
  }
}

async function deleteTvShow(tvShowId: string) {
  try {
    return await prisma.tvShows.delete({
      where: { id: tvShowId },
    })
  } catch (error) {
    console.error("Error deleting TV show:", error)
    throw new Error("Could not delete TV show!")
  }
}

const tvShowRepository = {
  createTvShow,
  getAllTvShows,
  findTvShowById,
  updateTvShow,
  deleteTvShow,
}

export default tvShowRepository
