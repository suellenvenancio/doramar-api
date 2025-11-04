import { prisma } from "../lib/prisma"

async function findListById(id: string) {
  const list = await prisma.lists.findUnique({
    where: { id },
    include: {
      tvShows: {
        include: { tvShow: true },
        orderBy: { order: "asc" },
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

export async function addTvShowOnTheList({
  listId,
  tvShowId,
}: {
  listId: string
  tvShowId: string
}) {
  return prisma.listTvShow.create({
    data: {
      listId: listId,
      tvShowId: tvShowId,
    },
  })
}

async function findTvShowInList(listId: string, tvShowId: string) {
  return await prisma.listTvShow.findFirst({
    where: {
      listId: listId,
      tvShowId: tvShowId,
    },
  })
}

async function findListItems(listId: string) {
  return await prisma.listTvShow.findMany({
    where: { listId },
  })
}

async function findListByIdAndUserId(listId: string, userId: string) {
  return await prisma.lists.findFirst({
    where: {
      id: listId,
      userId: userId,
    },
  })
}

function updateItemOrder(itemId: string, newOrder: number) {
  return prisma.listTvShow.update({
    where: { id: itemId },
    data: { order: newOrder },
  })
}

async function transaction(updates: any) {
  return await prisma.$transaction(updates)
}

const listsRepository = {
  transaction,
  updateItemOrder,
  findListByIdAndUserId,
  findListItems,
  findTvShowInList,
  getAllListsByUserId,
  createList,
  addTvShowOnTheList,
  getAllListsByUserEmail,
  findListById,
}

export default listsRepository
