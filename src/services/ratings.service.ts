import ratingsRepository from "../repository/ratings.repository"

export async function createRating(data: {
  userId: string
  tvShowId: string
  scaleId: number
}) {
  const existingRating = await ratingsRepository.getRatingByUserIdAndTvShowId(
    data.userId,
    data.tvShowId
  )

  if (existingRating && existingRating.scaleId === data.scaleId) {
    return existingRating
  }

  if (existingRating && existingRating.scaleId !== data.scaleId) {
    return await ratingsRepository.updateRatingScaleId({
      ratingId: existingRating.id,
      scaleId: data.scaleId,
    })
  }

  return await ratingsRepository.createRating(data)
}

export async function getRatingsByUserId(userId: string) {
  try {
    return await ratingsRepository.getRatingsByUserId(userId)
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
    const existingRating = await ratingsRepository.findRatingById(ratingId)

    if (!existingRating || existingRating.userId !== userId) {
      throw new Error(
        "Rating not found or you do not have permission to modify this rating!"
      )
    }

    const res = await ratingsRepository.updateRatingScaleId({
      ratingId,
      scaleId,
    })

    return res
  } catch (error) {
    console.error("Error updating rating:", error)
    throw new Error("Could not update rating!")
  }
}

async function getRatingScales() {
  return await ratingsRepository.getRatingScales()
}

const ratingsServices = {
  createRating,
  getRatingsByUserId,
  updateRating,
  getRatingScales,
}

export default ratingsServices
