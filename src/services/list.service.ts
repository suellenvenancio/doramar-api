import { prisma } from "../app"

async function findListById(id: string) {
  const list = await prisma.lists.findUnique({
    where: { id },
    include: {
      tvShows: {
        include: { tvShow: true },
      },
    },
  })

  return {
    ...list,
    tvShows: list?.tvShows
      .map((tvShow) => ({
        ...tvShow.tvShow,
        order: tvShow.order,
      }))
      .sort((a, b) => a.order - b.order),
  }
}

async function getAllListsByUserId(userId: string) {
  try {
    const allTvShows = await prisma.lists.findMany({
      where: {
        userId,
      },
      include: {
        tvShows: {
          include: { tvShow: true },
        },
      },
    })

    const res = allTvShows.map((list) => {
      return {
        ...list,
        tvShows: list.tvShows
          .map((tvShow) => ({
            ...tvShow.tvShow,
            order: tvShow.order,
          }))
          .sort((a, b) => a.order - b.order),
      }
    })
    return res
  } catch (error) {
    console.error("Error fetching TV shows:", error)
    throw new Error("Could not fetch TV shows!")
  }
}
async function getAllListsByUserEmail(email: string) {
  try {
    const allTvShows = await prisma.lists.findMany({
      where: {
        user: {
          email,
        },
      },
      include: {
        tvShows: {
          include: { tvShow: true },
        },
      },
    })
    const res = allTvShows.map((list) => {
      return {
        ...list,
        tvShows: list.tvShows
          .map((tvShow) => ({
            ...tvShow.tvShow,
            order: tvShow.order,
          }))
          .sort((a, b) => a.order - b.order),
      }
    })
    return res
  } catch (error) {
    console.error("Error fetching TV shows:", error)
    throw new Error("Could not fetch TV shows!")
  }
}

async function createList(list: { name: string; userId: string }) {
  return prisma.lists.create({
    data: {
      ...list,
    },
  })
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
  const list = await prisma.lists.findUnique({
    where: { id: listId },
  })

  if (!list) {
    throw new Error("List does not exist!")
  }

  if (list.userId !== userId) {
    throw new Error("You do not have permission to modify this list!")
  }

  const tvShowIdExistOnTheList = await prisma.listTvShow.findFirst({
    where: {
      listId: listId,
      tvShowId: tvShowId,
    },
  })

  if (tvShowIdExistOnTheList) {
    throw new Error("The TV Show already exists in this list!")
  }

  return prisma.listTvShow.create({
    data: {
      listId: listId,
      tvShowId: tvShowId,
    },
  })
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
  const items = await prisma.listTvShow.findMany({
    where: { listId },
  })

  if (!items.length) {
    throw new Error("A lista está vazia!")
  }

  const list = await prisma.lists.findUnique({
    where: { id: listId, userId },
  })

  if (!list) {
    throw new Error(
      "List does not exist or you do not have permission to modify this list!"
    )
  }

  // Ordena os itens pelo campo 'order' antes de manipular
  items.sort((a, b) => a.order - b.order)

  const index = items.findIndex((i) => i.tvShowId === tvShowId)
  if (index === -1) throw new Error("Item não encontrado nessa lista")

  const [movedItem] = items.splice(index, 1)

  const targetIndex = Math.max(0, Math.min(newOrder, items.length))
  items.splice(targetIndex, 0, movedItem)

  const minOrder = items.length > 0 ? Math.min(...items.map((i) => i.order)) : 0

  const updates = items.map((item, idx) =>
    prisma.listTvShow.update({
      where: { id: item.id },
      data: { order: minOrder + idx },
    })
  )

  await prisma.$transaction(updates)

  const updatedList = await prisma.lists.findUnique({
    where: { id: listId },
    include: {
      tvShows: {
        include: { tvShow: true },
        orderBy: { order: "asc" },
      },
    },
  })

  const updatedTvShows = updatedList?.tvShows
    .map((tvShow) => ({
      ...tvShow.tvShow,
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
