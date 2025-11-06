import listsRepository from "../repository/list.repository"
import tvShowRepository from "../repository/tvshow.repository"
import { AppError } from "../utils/errors"

async function findListById(id: string) {
  return await listsRepository.findListById(id)
}

async function getAllListsByUserId(userId: string) {
  return await listsRepository.getAllListsByUserId(userId)
}
async function getAllListsByUserEmail(email: string) {
  return await listsRepository.getAllListsByUserEmail(email)
}

async function createList(list: { name: string; userId: string }) {
  const existingList = await listsRepository.findListByNameAndUserId(list)

  if (existingList) {
    throw new AppError("List with this name already exists for the user!", 400)
  }

  return await listsRepository.createList(list)
}

export async function addTvShowToList({
  listId,
  tvShowId,
  userId,
}: {
  listId: string
  tvShowId: string
  userId: string
}) {
  const list = await listsRepository.findListById(listId)

  if (!list.tvShows && !list.id) {
    throw new AppError("List does not exist!", 404)
  }

  if (list.userId !== userId) {
    throw new AppError("You do not have permission to modify this list!", 403)
  }

  const tvShow = await tvShowRepository.findTvShowById(tvShowId)

  if (!tvShow) {
    throw new AppError("TV Show does not exist!", 404)
  }

  const tvShowIdExistOnTheList = await listsRepository.findTvShowInList({
    listId,
    tvShowId,
  })

  if (tvShowIdExistOnTheList) {
    throw new AppError("The TV Show already exists in this list!", 400)
  }

  let lastItemOfListOrder = 1
  if (list.tvShows && list.tvShows.length > 0) {
    lastItemOfListOrder = list.tvShows[list.tvShows.length - 1].order
  }

  await listsRepository.addTvShowOnTheList({
    listId: listId,
    tvShowId: tvShowId,
    order: lastItemOfListOrder,
  })

  return await listsService.findListById(listId)
}

async function updateListOrder({
  listId,
  newOrder,
  tvShowId,
  userId,
}: {
  listId: string
  newOrder: number
  tvShowId: string
  userId: string
}) {
  const list = await listsRepository.findListByIdAndUserId(listId, userId)

  if (!list) {
    throw new AppError(
      "List does not exist or you do not have permission to modify this list!",
      404
    )
  }

  const items = await listsRepository.findListItems(listId)

  if (!items.length) {
    throw new AppError("This list has no items to reorder!", 400)
  }

  items.sort((a, b) => a.order - b.order)

  const index = items.findIndex((i) => i.tvShowId === tvShowId)
  if (index === -1) {
    throw new AppError("TV Show not found in the list!", 404)
  }

  const [movedItem] = items.splice(index, 1)

  const targetIndex = Math.max(0, Math.min(newOrder - 1, items.length))
  items.splice(targetIndex, 0, movedItem)

  const minOrder =
    items.length > 0 ? Math.max(1, Math.min(...items.map((i) => i.order))) : 1

  const updates = items.map((item, idx) =>
    listsRepository.updateItemOrder(item.id, minOrder + idx)
  )

  await listsRepository.transaction(updates)

  const updatedList = await listsRepository.findListById(listId)

  if (!updatedList.tvShows) {
    throw new Error("Could not fetch updated TV shows!")
  }

  const updatedTvShows = updatedList?.tvShows
    .map((tvShow) => ({
      ...tvShow,
      order: tvShow.order,
    }))
    .sort((a, b) => a.order - b.order)

  return {
    ...updatedList,
    tvShows: updatedTvShows,
  }
}

const listsService = {
  getAllListsByUserId,
  createList,
  addTvShowToList,
  getAllListsByUserEmail,
  updateListOrder,
  findListById,
}

export default listsService
