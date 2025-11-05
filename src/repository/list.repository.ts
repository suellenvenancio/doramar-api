import { prisma } from "../lib/prisma"

async function findListById(id: string) {
  try {
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
  } catch (error) {
    console.error("Error finding list by id:", error)
    throw new Error("Could not find list!")
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
  try {
    return await prisma.lists.create({
      data: {
        ...list,
      },
    })
  } catch (error) {
    console.error("Error creating list:", error)
    throw new Error("Could not create list!")
  }
}

export async function addTvShowOnTheList({
  listId,
  tvShowId,
  order,
}: {
  listId: string
  tvShowId: string
  order: number
}) {
  try {
    return await prisma.listTvShow.create({
      data: {
        listId: listId,
        tvShowId: tvShowId,
        order: order,
      },
    })
  } catch (error) {
    console.error("Error adding TV show to list:", error)
    throw new Error("Could not add TV show to list!")
  }
}

async function findTvShowInList({
  listId,
  tvShowId,
}: {
  listId: string
  tvShowId: string
}) {
  try {
    return await prisma.listTvShow.findFirst({
      where: {
        listId: listId,
        tvShowId: tvShowId,
      },
    })
  } catch (error) {
    console.error("Error finding TV show in list:", error)
    throw new Error("Could not find TV show in list!")
  }
}

async function findListItems(listId: string) {
  try {
    return await prisma.listTvShow.findMany({
      where: { listId },
    })
  } catch (error) {
    console.error("Error finding list items:", error)
    throw new Error("Could not find list items!")
  }
}

async function findListByIdAndUserId(listId: string, userId: string) {
  try {
    return await prisma.lists.findFirst({
      where: {
        id: listId,
        userId: userId,
      },
    })
  } catch (error) {
    console.error("Error finding list:", error)
    throw new Error("Could not find list!")
  }
}

function updateItemOrder(itemId: string, newOrder: number) {
  try {
    return prisma.listTvShow.update({
      where: { id: itemId },
      data: { order: newOrder },
    })
  } catch (error) {
    console.error("Error updating item order:", error)
    throw new Error("Could not update item order!")
  }
}

async function transaction(updates: any) {
  try {
    return await prisma.$transaction(updates)
  } catch (error) {
    console.error("Error in transaction:", error)
    throw new Error("Transaction failed!")
  }
}

async function findListByNameAndUserId({
  name,
  userId,
}: {
  name: string
  userId: string
}) {
  try {
    return await prisma.lists.findFirst({
      where: {
        name,
        userId,
      },
    })
  } catch (error) {
    console.error("Error finding list:", error)
    throw new Error("Could not find list!")
  }
}

const listsRepository = {
  findListByNameAndUserId,
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
