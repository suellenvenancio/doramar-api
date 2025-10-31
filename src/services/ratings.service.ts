import { prisma } from "../app"

export async function createRating(data: {
  userId: string
  tvShowId: string
  scaleId: number
}) {
  const rating = await prisma.ratings.create({
    data: {
      ...data,
    },
    include: {
      scale: true,
      tvShow: true,
    },
  })

  return rating
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
    console.log(res)
    return res
  } catch (error) {
    console.error("Error fetching ratings:", error)
    throw new Error("Could not fetch ratings!")
  }
}
export async function getRatingsByTvShowId(userId: string) {
  try {
    const res = await prisma.ratings.findMany({
      where: { userId },
      include: {
        tvShow: {
          select: {
            id: true,
            title: true,
            poster: true,
          },
        },
      },
    })
    return res
  } catch (error) {
    console.error("Error fetching ratings:", error)
    throw new Error("Could not fetch ratings!")
  }
}
export async function updateRating({
  scaleId,
  userId,
  ratingId,
}: {
  scaleId: number
  userId: string
  ratingId: string
}) {
  try {
    const existingRating = await prisma.ratings.findUnique({
      where: { id: ratingId },
    })

    if (!existingRating || existingRating.userId !== userId) {
      throw new Error(
        "Rating not found or you do not have permission to modify this rating!"
      )
    }

    const res = await prisma.ratings.update({
      where: { id: ratingId },
      data: {
        scaleId,
      },
    })
    return res
  } catch (error) {
    console.error("Error updating rating:", error)
    throw new Error("Could not update rating!")
  }
}

async function getRatingScales() {
  return await prisma.ratingScale.findMany({
    orderBy: {
      id: "asc",
    },
  })
}

const ratingsServices = {
  createRating,
  getRatingsByUserId,
  getRatingsByTvShowId,
  updateRating,
  getRatingScales,
}

export default ratingsServices
