import listsRepository from "../repository/list.repository"

async function findListById(id: string) {
  return await listsRepository.findListById(id)
}

async function getAllListsByUserId(userId: string) {
  try {
    return await listsRepository.getAllListsByUserId(userId)
  } catch (error) {
    console.error("Error fetching TV shows:", error)
    throw new Error("Could not fetch TV shows!")
  }
}
async function getAllListsByUserEmail(email: string) {
  try {
    return await listsRepository.getAllListsByUserEmail(email)
  } catch (error) {
    console.error("Error fetching TV shows:", error)
    throw new Error("Could not fetch TV shows!")
  }
}

async function createList(list: { name: string; userId: string }) {
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

  if (!list) {
    throw new Error("List does not exist!")
  }

  if (list.userId !== userId) {
    throw new Error("You do not have permission to modify this list!")
  }

  const tvShowIdExistOnTheList = await listsRepository.findTvShowInList(
    listId,
    tvShowId
  )

  if (tvShowIdExistOnTheList) {
    throw new Error("The TV Show already exists in this list!")
  }

  await listsRepository.addTvShowOnTheList({
    listId: listId,
    tvShowId: tvShowId,
  })

  return await listsServices.findListById(listId)
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
  const items = await listsRepository.findListItems(listId)

  if (!items.length) {
    throw new Error("A lista está vazia!")
  }

  const list = await listsRepository.findListByIdAndUserId(listId, userId)

  if (!list) {
    throw new Error(
      "List does not exist or you do not have permission to modify this list!"
    )
  }

  items.sort((a, b) => a.order - b.order)

  const index = items.findIndex((i) => i.tvShowId === tvShowId)
  if (index === -1) throw new Error("Item não encontrado nessa lista")

  const [movedItem] = items.splice(index, 1)

  const targetIndex = Math.max(0, Math.min(newOrder, items.length))
  items.splice(targetIndex, 0, movedItem)

  const minOrder = items.length > 0 ? Math.min(...items.map((i) => i.order)) : 0

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

const listsServices = {
  getAllListsByUserId,
  createList,
  addTvShowToList,
  getAllListsByUserEmail,
  updateListOrder,
  findListById,
}

export default listsServices
