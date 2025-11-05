import { prisma } from "../lib/prisma"
import { AppError } from "../utils/errors"

export async function createRating(data: {
  userId: string
  tvShowId: string
  scaleId: number
}) {
  try {
    return await prisma.ratings.create({
      data: {
        ...data,
      },
      include: {
        scale: true,
        tvShow: true,
      },
    })
  } catch (error) {
    console.error("Error creating rating:", error)
    throw new Error("Could not create rating!")
  }
}

export async function getRatingsByUserId(userId: string) {
  try {
    const res = await prisma.ratings.findMany({
      where: { userId },
      include: {
        tvShow: true,
        user: {
          omit: {
            password: true,
          },
        },
        scale: true,
      },
    })
    return res
  } catch (error) {
    console.error("Error fetching ratings:", error)
    throw new Error("Could not fetch ratings!")
  }
}

export async function updateRatingScaleId({
  ratingId,
  scaleId,
}: {
  ratingId: string
  scaleId: number
}) {
  try {
    return await prisma.ratings.update({
      where: { id: ratingId },
      data: {
        scaleId: scaleId,
      },
      include: {
        scale: true,
        tvShow: true,
      },
    })
  } catch (error) {
    console.error("Error updating rating scale:", error)
    throw new Error("Could not update rating scale!")
  }
}

async function getRatingScales() {
  try {
    return await prisma.ratingScale.findMany({
      orderBy: {
        id: "asc",
      },
    })
  } catch (error) {
    console.error("Error fetching rating scales:", error)
    throw new Error("Could not fetch rating scales!")
  }
}

function getRatingByUserIdAndTvShowId(userId: string, tvShowId: string) {
  try {
    return prisma.ratings.findFirst({
      where: {
        userId: userId,
        tvShowId: tvShowId,
      },
      include: {
        tvShow: true,
        user: {
          omit: {
            password: true,
          },
        },
        scale: true,
      },
    })
  } catch (error) {
    console.error("Error fetching rating by user and tv show:", error)
    throw new Error("Could not fetch rating!")
  }
}

async function findRatingById(ratingId: string) {
  try {
    return await prisma.ratings.findUnique({
      where: { id: ratingId },
    })
  } catch (error) {
    console.error("Error finding rating by id:", error)
    throw new Error("Could not find rating!")
  }
}

async function createRatingScale(value: number, description: string) {
  try {
    return await prisma.ratingScale.create({
      data: {
        id: value,
        label: description,
      },
    })
  } catch (error) {
    console.error("Error creating rating scale:", error)
    throw new Error("Could not create rating scale!")
  }
}

function getRatingById(ratingId: string) {
  try {
    return prisma.ratings.findUnique({
      where: {
        id: ratingId,
      },
    })
  } catch (error) {
    console.error("Error fetching rating by id:", error)
    throw new AppError("Could not fetch rating by id!", 500)
  }
}

const ratingsRepository = {
  createRatingScale,
  findRatingById,
  getRatingById,
  createRating,
  getRatingsByUserId,
  updateRatingScaleId,
  getRatingScales,
  getRatingByUserIdAndTvShowId,
}

export default ratingsRepository
