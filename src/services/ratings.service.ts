import ratingsRepository from "../repository/ratings.repository"
import tvShowRepository from "../repository/tvshow.repository"
import { AppError } from "../utils/errors"

export async function createRating({
  userId,
  tvShowId,
  scaleId,
}: {
  userId: string
  tvShowId: string
  scaleId: number
}) {
  const existingTvShow = await tvShowRepository.findTvShowById(tvShowId)
  if (!existingTvShow) {
    throw new AppError("TV Show not found!", 404)
  }

  const existingRating = await ratingsRepository.getRatingByUserIdAndTvShowId(
    userId,
    tvShowId
  )

  if (existingRating && existingRating.scaleId === scaleId) {
    return existingRating
  }

  if (existingRating && existingRating.scaleId !== scaleId) {
    return await ratingsRepository.updateRatingScaleId({
      ratingId: existingRating.id,
      scaleId,
    })
  }

  return await ratingsRepository.createRating({ userId, tvShowId, scaleId })
}

export async function getRatingsByUserId(userId: string) {
  return await ratingsRepository.getRatingsByUserId(userId)
}

async function getRatingScales() {
  return await ratingsRepository.getRatingScales()
}

async function createRatingScale({ id, label }: { id: number; label: string }) {
  return await ratingsRepository.createRatingScale(id, label)
}

async function getRatingById(ratingId: string) {
  return await ratingsRepository.getRatingById(ratingId)
}

const ratingsServices = {
  createRatingScale,
  createRating,
  getRatingsByUserId,
  getRatingById,
  getRatingScales,
}

export default ratingsServices
